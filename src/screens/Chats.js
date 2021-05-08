/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:24 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:31:24 
 */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Platform, RefreshControl } from 'react-native';
import { Appbar } from 'react-native-paper';
import Contact from '../components/Contact'
import { getLastMessagesJSON } from "../functions/main"
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const LastMessagesJSON = getLastMessagesJSON()

const Chats = () => {
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.Content title="Chats" subtitle={''} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </Appbar.Header>
            <View style={{ flex: 1, marginTop: 10 }}>
                <FlatList showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                    data={LastMessagesJSON}
                    renderItem={({ item }) => <Contact profilePicURL={item.profilePicURL} contactName={item.key} time={item.time} lastMSG={item.lastMSG}></Contact>}
                />

            </View>
        </View>
    )
}

export default Chats
