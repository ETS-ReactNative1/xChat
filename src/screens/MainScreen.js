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

import Chats from './Chats';
import Stories from './Stories';
import Profile from './Profile';
import Settings from './Settings';
import FlashChat from './FlashChat';
import { useRoute, useNavigation } from '@react-navigation/native';



const MainScreen = (params) => {
    return (
        <View style={{ flex: 1 }}>
            <MyNavigator></MyNavigator>
        </View>
    );
}

// class MainScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }
//     render() {
//         //const navigation = useNavigation();
//         // setInterval(() => {
//         //     authControl(navigation);
//         // }, 5000);

//     }
// }


//-------------------------------------------------------TAB NAVIGATOR

const StoriesRoute = () => <Stories></Stories>;

const ChatsRoute = () => <Chats></Chats>;

const FlashChatRoute = () => <FlashChat></FlashChat>;

const ProfileRoute = () => <Profile></Profile>;

const SettingsRoute = () => <Settings></Settings>;

const MyNavigator = () => {
    const theme = useTheme();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Stories', title: 'Stories', icon: () => { return (<SuperIcon type="Entypo" size={20} color={"#cfcfcf"} name="circular-graph" ></SuperIcon>); }, color: theme.colors.primary }, // Custom icon
        //{ key: 'Stories', title: 'Stories', icon: 'restore', color: '#34803d' },
        { key: 'chats', title: 'Chats', icon: 'chat', color: theme.colors.primary },
        { key: 'FlashChat', title: 'FlashChat', icon: 'lightning-bolt', color: theme.colors.primary },
        { key: 'Profile', title: 'Profile', icon: 'account-circle', color: theme.colors.primary },
        { key: 'Settings', title: 'Settings', icon: () => { return (<SuperIcon type="Feather" size={20} color={"#cfcfcf"} name="settings" ></SuperIcon>); }, color: theme.colors.primary },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        Stories: StoriesRoute,
        chats: ChatsRoute,
        FlashChat: FlashChatRoute,
        Profile: ProfileRoute,
        Settings: SettingsRoute,
    });

    return (

        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}

        />
    );
};

export default MainScreen
