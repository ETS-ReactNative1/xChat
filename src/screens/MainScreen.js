/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:30:59 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:30:59 
 */
//Main components
import React, { Component } from 'react'
import { View } from 'react-native'

//Main styling library
import { useTheme, BottomNavigation, Text } from 'react-native-paper'

//Easier way to use Icons
import SuperIcon from '../components/SuperIcon'

import Stories from './Stories';
import Chats from './Chats';
import FlashChat from './FlashChat';
import Profile from './Profile';
import Settings from './Settings';
import { useRoute, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const MainScreen = (params) => {
    return (
        <View style={{ flex: 1 }}>
            <MyNavigator></MyNavigator>
        </View>
    );
}


const Tab = createBottomTabNavigator();
function MyNavigator() {
    const theme = useTheme()
    return (
        <Tab.Navigator tabBarShowLabel={false} tabBarOptions={{
            activeTintColor: theme.colors.primary,
            inactiveTintColor: '#cfcfcf',
            style: {
                height: 60,
                position: 'absolute',
                bottom: 15,
                left: 10,
                right: 10,
                padding: 5,
                paddingBottom: 7.5,
                borderRadius:5,
                elevation: 4,
            },
            labelStyle: {
                fontSize: 12
            }
        }}>
            <Tab.Screen options={{ headerShown: false, tabBarIcon: ({focused}) => (<SuperIcon color={focused?theme.colors.primary:theme.colors.disabled} type="Entypo" name="circular-graph" size={22} />), }} name="Stories" component={Stories} />
            <Tab.Screen options={{ headerShown: false, tabBarIcon: ({focused}) => (<SuperIcon color={focused?theme.colors.primary:theme.colors.disabled} type="Ionicons" name="chatbox" size={22} />), }} name="Chats" component={Chats} />
            <Tab.Screen options={{ headerShown: false, tabBarIcon: ({focused}) => (<SuperIcon color={focused?theme.colors.primary:theme.colors.disabled} type="MaterialCommunity" name="lightning-bolt" size={22} />), }} name="FlashChat" component={FlashChat} />
            <Tab.Screen options={{ headerShown: false, tabBarIcon: ({focused}) => (<SuperIcon color={focused?theme.colors.primary:theme.colors.disabled} type="MaterialCommunityIcons" name="home" size={22} />), }} name="Profile" component={Profile} />
            <Tab.Screen options={{ headerShown: false, tabBarIcon: ({focused}) => (<SuperIcon color={focused?theme.colors.primary:theme.colors.disabled} type="Feather" name="settings" size={22} />), }} name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}


export default MainScreen
