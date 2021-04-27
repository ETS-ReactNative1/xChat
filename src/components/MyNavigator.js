import * as React from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import MyChatStack from '../screens/ContactList';
import Settings from '../screens/Settings';
//import CustomIcon from './CustomIcon.js'
import Story from '../../assets/svg/Story.svg'
import Icon from 'react-native-vector-icons/Entypo'
import { ThemeContext } from 'styled-components';

//-------------------------------------------------------TAB NAVIGATOR

const MusicRoute = () => <Text>Music</Text>;

const ChatsRoute = () => <MyChatStack></MyChatStack>;

const ProfileRoute = () => <Text>Profile</Text>;

const SettingsRoute = () => <Settings></Settings>;

//-------------------------------------------------------STACK NAVIGATOR



const MyNavigator = () => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Stories', icon: () => { return ( <Icon size={20} color={"#cfcfcf"} name="circular-graph" ></Icon>); }, color: '#264653' }, // Custom icon
    // { key: 'music', title: 'Stories', icon: 'restore', color: '#264653' },
    { key: 'chats', title: 'Chats', icon: 'chat', color: '#26534f' },
    { key: 'Profile', title: 'Profile', icon: 'account-circle', color: '#706937' },
    { key: 'Settings', title: 'Settings', icon: 'bolt', color: '#513770' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
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