import * as React from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import { View } from 'react-native';
import MyChatStack from '../screens/ContactList';
import Settings from '../screens/Settings';
//import CustomIcon from './CustomIcon.js'
import { Appbar } from 'react-native-paper';
import Stories from '../screens/Stories'
import Icon from 'react-native-vector-icons/Entypo'
import { ThemeContext } from 'styled-components';
import Profile from '../screens/Profile'
import { Platform } from 'react-native';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

//-------------------------------------------------------TAB NAVIGATOR

const StoriesRoute = () => <StoriesFullscreen></StoriesFullscreen>;

const ChatsRoute = () => <MyChatStack></MyChatStack>;

const ProfileRoute = () => <Profile></Profile>;

const SettingsRoute = () => <Settings></Settings>;

//-------------------------------------------------------STACK NAVIGATOR

function StoriesFullscreen() {
  return (
    <View>
      <Appbar.Header >
        <Appbar.Content title="Stories" subtitle={''} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
        <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
      </Appbar.Header>
      <Stories></Stories>
    </View>
  );
}

const MyNavigator = () => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Stories', title: 'Stories', icon: () => { return (<Icon size={20} color={"#cfcfcf"} name="circular-graph" ></Icon>); }, color: '#264653' }, // Custom icon
    // { key: 'Stories', title: 'Stories', icon: 'restore', color: '#264653' },
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

export default MyNavigator;