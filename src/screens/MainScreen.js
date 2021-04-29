//Main components
import React from 'react'
import { View } from 'react-native'

//Main styling library
import {useTheme, BottomNavigation, Text } from 'react-native-paper'

//Easier way to use Icons
import SuperIcon from '../components/SuperIcon'

import Chats from './Chats';
import Stories from './Stories';
import Profile from './Profile';
import Settings from './Settings';




const MainScreen = () => {
    return (
        <View style={{flex: 1}}>
            <MyNavigator></MyNavigator>
        </View>
    )
}

//-------------------------------------------------------TAB NAVIGATOR

const StoriesRoute = () => <Stories></Stories>;

const ChatsRoute = () => <Chats></Chats>;

const ProfileRoute = () => <Profile></Profile>;

const SettingsRoute = () => <Settings></Settings>;

const MyNavigator = () => {
    const theme = useTheme();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Stories', title: 'Stories', icon: () => { return (<SuperIcon type="Entypo" size={20} color={"#cfcfcf"} name="circular-graph" ></SuperIcon>); }, color: '#264653' }, // Custom icon
        //{ key: 'Stories', title: 'Stories', icon: 'restore', color: '#264653' },
        { key: 'chats', title: 'Chats', icon: 'chat', color: theme.colors.primary },
        { key: 'Profile', title: 'Profile', icon: 'account-circle', color: '#706937' },
        { key: 'Settings', title: 'Settings', icon: 'bolt', color: '#513770' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        Stories: StoriesRoute,
        chats: ChatsRoute,
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
