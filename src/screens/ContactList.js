import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Contact from '../components/Contact'
import { createStackNavigator } from '@react-navigation/stack';
import {Chatting} from '../screens/Chatting';

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

function ContactList(props) {
    return (
        <View style={{ marginLeft: '5%', width: '90%' }}>
            <Contact ></Contact>
            <Contact ></Contact>
            <Contact ></Contact>
            <Contact ></Contact>
            <Contact ></Contact>
        </View>
    );
}

export default MyChatStack;