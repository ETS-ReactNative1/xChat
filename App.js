// +------------------------------------------------------------------------+
// | @author Marc Moreno (LiLPandemio)
// | @author_url 1: https://www.societyplus.net/
// | @author_url 2: http://dl.societyplus.net/LiLPandemio
// | @author_email: admin@societyplus.net 
// +------------------------------------------------------------------------+
// | xChat - Meet people anonymously! - QuickMeet
// | Copyright (c) 2021 xChat. All rights reserved.
// +------------------------------------------------------------------------+
/**
 *                    --PENDING FEATURES--
 * //TODO: App translation (JSON)
 * //TODO: Handle no connection
 * 
 * 
 * 
 */
import React, { useState } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

//Stack navigator container import:
import {
  NavigationContainer
} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
//Stacked screens import:
import Chat from './src/screens/Chat';                //Importing screen: Chat
import Chatting from './src/screens/Chatting';                //Importing screen: Chatting (OLD)
import EditProfile from './src/screens/EditProfile';  //Importing screen: EditProfile
import FlashChat from './src/screens/FlashChat';      //Importing screen: FlashChat
import Login from './src/screens/Login';              //Importing screen: Login
import ThemeRoom from './src/screens/ThemeRoom';              //Importing screen: Login
import Story from './src/screens/Story';              //Importing screen: Story
import ViewProfile from './src/screens/ViewProfile';  //Importing screen: ViewProfile
import MainScreen from './src/screens/MainScreen';  //Importing screen: MainScreen
import PicEditor from './src/screens/PicEditor';  //Importing: PicEditor
import StoryCamera from './src/screens/StoryCamera';  //Importing: StoryCamera
import StoryViewer from './src/screens/StoryViewer';  //Importing: StoryViewer
import TextStoryCreator from './src/screens/TextStoryCreator';  //Importing: TextStoryCreator
import VisualStoryEditor from './src/screens/VisualStoryEditor';  //Importing: VisualStoryEditor
import SplashScreen from './src/screens/SplashScreen'; //IMporting: The splash screen when loading
import AuthProvider, { AppContext } from './src/context/AuthProvider';

//Import themes
import {LightTheme, DarkTheme, LightCandy, DarkCandy, LightSea, DarkSea} from './src/themes/themes'

//Preferences context import + Tools
import { withTheme, Card, Text, Title, Paragraph, Appbar, Provider as PaperProvider } from 'react-native-paper';
import { PreferencesContext } from './PreferencesContext';
import { tokenStatus } from './src/functions/main';


function App() {
  const [Theme, setTheme] = React.useState(DarkTheme);
  
  const [isLoading, setIsLoading] = React.useState(true);
  const [IsLoggedIn, setIsLoggedIn] = React.useContext(AppContext);

  React.useEffect(() => {
    async function loadToken() {
      let token_status = await tokenStatus();
      // console.log(token_status);
      if (token_status === "TOKEN_OK") {
        setIsLoading(false);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    };
    loadToken();
  }, [])



  const preferences = React.useMemo(
    () => ({
      setTheme,
      Theme,
    }),
    [setTheme, Theme]
  );
  const switchLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={Theme}>
        <NavigationContainer theme={Theme}>
          {isLoading ? <SplashScreen></SplashScreen> : IsLoggedIn ? <MyStack></MyStack> : <AuthStack></AuthStack>}
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>

  );
}

const Stack = createStackNavigator();  //Creating the stack navigator.

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="none"
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function MyStack() {                    //Main app component
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      headerMode="none"
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ThemeRoom" component={ThemeRoom} />
      <Stack.Screen name="FlashChat" component={FlashChat} />
      <Stack.Screen options={{ gestureEnabled: true, gestureDirection: 'vertical', gestureResponseDistance: 1000 }} name="Story" component={Story} />
      <Stack.Screen name="PicEditor" component={PicEditor} />
      <Stack.Screen name="StoryCamera" component={NavStoryCamera} />
      <Stack.Screen name="StoryViewer" component={StoryViewer} />
      <Stack.Screen name="TextStoryCreator" component={TextStoryCreator} />
      <Stack.Screen name="VisualStoryEditor" component={VisualStoryEditor} />
      <Stack.Screen options={{ gestureEnabled: true, gestureDirection: 'vertical', gestureResponseDistance: 30 }} name="Chatting" component={Chatting} />
      <Stack.Screen options={{ gestureEnabled: false, gestureDirection: 'vertical', gestureResponseDistance: 30 }} name="ViewProfile" component={ViewProfile} />
    </Stack.Navigator>
  );
}
function AuthControlledApp({ children }) {
  return <AuthProvider>
    <App></App>
  </AuthProvider>
}
function NavStoryCamera() {
  const navigator = useNavigation();
  return <StoryCamera navigator={navigator} />
}

export default withTheme(AuthControlledApp)