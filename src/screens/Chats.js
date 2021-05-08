/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:24 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-08 19:24:44
 */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Platform, RefreshControl, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import Contact from '../components/Contact'
import { getLastMessagesJSON } from "../functions/main"
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const LastMessagesJSON = getLastMessagesJSON()

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Chats = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.Content title="Chats" subtitle={''} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </Appbar.Header>
            <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 10 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                {LastMessagesJSON.map((LastMessages, index) => (
                    <Contact profilePicURL={LastMessages.profilePicURL} contactName={LastMessages.key} time={LastMessages.time} lastMSG={LastMessages.lastMSG} />
                ))}
            </ScrollView>
        </View>
    )
}

export default Chats
