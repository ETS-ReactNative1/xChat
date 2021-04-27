import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Contact from '../components/Contact'
import { createStackNavigator } from '@react-navigation/stack';
import { Chatting } from '../screens/Chatting';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Stack = createStackNavigator();

export function MyChatStack() {
    return (
        <Stack.Navigator
            initialRouteName="Chats"
            options={{
            }}
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'vertical',
                cardOverlayEnabled: true,
            })}
            mode="modal">
            <Stack.Screen name="Chats" component={ContactList} />
            <Stack.Screen name="Chatting" component={Chatting} />
        </Stack.Navigator>
    );
}

const ChatAppbar = () => (
    <Appbar.Header>
        <Appbar.Content title="Chats" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
        <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
    </Appbar.Header>
);

function ContactList(props) {
    return (
        <View style={{}}>
            <ChatAppbar></ChatAppbar>
            <View style={{ marginTop: 10, paddingBottom: 20 }}>
                <FlatList style={{ }}
                    data={[
                        { key: 'LiLPandemio🚀' },
                        { key: 'Will Smith' },
                        { key: 'Papa' },
                        { key: 'Jesucristo' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                        { key: 'MrDan' },
                        { key: 'MrDominic' },
                        { key: 'MrJackson' },
                        { key: 'MrJames' },
                        { key: 'MrJoel' },
                        { key: 'MrJohn' },
                        { key: 'MrJillian' },
                        { key: 'MrJimmy' },
                        { key: 'MrJulie' },
                    ]}
                    renderItem={({ item }) => <Contact contactName={item.key}></Contact>}
                />

            </View>
        </View>
    );
}

export default MyChatStack;