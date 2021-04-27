import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Contact from '../components/Contact'
import { createStackNavigator } from '@react-navigation/stack';
import Chatting from '../screens/Chatting';

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
        <Appbar.Content title="Chats" subtitle={''} />
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
                        { key: 'LiLPandemio🚀', lastMSG: 'Tengo comprar el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/1'},
                        { key: 'Will Smith', lastMSG: 'Tengo queprar el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/2'},
                        { key: 'Papa', lastMSG: 'Tengo que ir a l pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/3'},
                        { key: 'Jesucristo', lastMSG: 'Tengo queprar el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/4'},
                        { key: 'Dan', lastMSG: 'Tengo que ir a c pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/5'},
                        { key: 'Dominic', lastMSG: 'Tengo que irr el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/6'},
                        { key: 'Jackson', lastMSG: 'Tengo que irr el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/7'},
                        { key: 'James', lastMSG: 'Tengo que ir ael pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/8'},
                        { key: 'Joel', lastMSG: 'Tengo que ir a l pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/9'},
                        { key: 'John', lastMSG: 'Tengo que ir a l pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/10'},
                        { key: 'Jillian', lastMSG: 'Tengo que irr el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/11'},
                        { key: 'Jimmy', lastMSG: 'Tengo que ir ael pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/12'},
                        { key: 'Julie', lastMSG: 'Tengo que ir ael pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/13'},
                        { key: 'MrDan', lastMSG: 'Tengo que ir ael pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/14'},
                        { key: 'MrDominic', lastMSG: 'Tengo que rar el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/15'},
                        { key: 'MrJackson', lastMSG: 'Tengo que rar el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/16'},
                        { key: 'MrJames', lastMSG: 'Tengo que irr el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/17'},
                        { key: 'MrJoel', lastMSG: 'Tengo que ir  el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/18'},
                        { key: 'MrJohn', lastMSG: 'Tengo que ir  el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/19'},
                        { key: 'MrJillian', lastMSG: 'Tengo que rar el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/20'},
                        { key: 'MrJimmy', lastMSG: 'Tengo que irr el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/21'},
                        { key: 'MrJulie', lastMSG: 'Tengo que irr el pan LOL', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/22'},
                    ]}
                    renderItem={({ item }) => <Contact profilePicURL={item.profilePicURL} contactName={item.key} time={item.time} lastMSG={item.lastMSG}></Contact>}
                />

            </View>
        </View>
    );
}

export default MyChatStack;