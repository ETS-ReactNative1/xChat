import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Contact from '../components/Contact'
import { createStackNavigator } from '@react-navigation/stack';
import {Chatting} from '../screens/Chatting';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

//<FlatList
//    data={[
//        { key: 'Devin' },
//        { key: 'Dan' },
//        { key: 'Dominic' },
//        { key: 'Jackson' },
//        { key: 'James' },
//        { key: 'Joel' },
//        { key: 'John' },
//        { key: 'Jillian' },
//        { key: 'Jimmy' },
//        { key: 'Julie' },
//    ]}
//    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
///>

const Stack = createStackNavigator();

export function MyChatStack() {
    return (
        <Stack.Navigator
            initialRouteName="Chats"
            options={{
                transitionSpec: {
                    open: {
                        duration: 750,
                        useNativeDriver: true,
                    },
                    close: {
                        duration: 750,
                        useNativeDriver: true,
                    }
                },
                screenInterpolator: sceneProps => {      
                    const { layout, position, scene } = sceneProps
              
                    const thisSceneIndex = scene.index
                    const width = layout.initWidth
              
                    const translateX = position.interpolate({
                      inputRange: [thisSceneIndex - 1, thisSceneIndex],
                      outputRange: [width, 0],
                    })
              
                    return { transform: [ { translateX } ] }
                  },
            }}
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                gestureEnabled: true,
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
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);

function ContactList(props) {
    return (
        <View style={{  }}>
            <ChatAppbar></ChatAppbar>
            <Contact ></Contact>
            <Contact ></Contact>
            <Contact ></Contact>
            <Contact ></Contact>
            <Contact ></Contact>
        </View>
    );
}

export default MyChatStack;