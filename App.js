import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Stack navigator container import:
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

//Stacked screens import:
import Chat from './src/screens/Chat';                //Importing screen: Chat
import Chatting from './src/screens/Chatting';                //Importing screen: Chatting (OLD)
import EditProfile from './src/screens/EditProfile';  //Importing screen: EditProfile
import FlashChat from './src/screens/FlashChat';      //Importing screen: FlashChat
import Login from './src/screens/Login';              //Importing screen: Login
import Story from './src/screens/Story';              //Importing screen: Story
import ViewProfile from './src/screens/ViewProfile';  //Importing screen: ViewProfile
import MainScreen from './src/screens/MainScreen';  //Importing screen: MainScreen
import PicEditor from './src/screens/PicEditor';  //Importing: PicEditor
import StoryCamera from './src/screens/StoryCamera';  //Importing: StoryCamera
import StoryViewer from './src/screens/StoryViewer';  //Importing: StoryViewer
import TextStoryCreator from './src/screens/TextStoryCreator';  //Importing: TextStoryCreator

//Preferences context import + Tools
import { withTheme, Card, Text, Title, Paragraph, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme, Appbar, Provider as PaperProvider } from 'react-native-paper';
import { PreferencesContext } from './PreferencesContext';
import merge from 'deepmerge';
import Profile from './src/screens/Profile';

//Mixing libraries
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

//Custimizing light theme
CombinedDefaultTheme.colors.primary = '#5700a8';
CombinedDefaultTheme.colors.text = '#000';
CombinedDefaultTheme.colors.secondary = '#fc0362';
CombinedDefaultTheme.colors.background = '#ffffffff';
CombinedDefaultTheme.colors.widgetBG = '#ffffff88';
CombinedDefaultTheme.colors.ok = '#cfcfcfff';
CombinedDefaultTheme.colors.error = '#C14242EE';
CombinedDefaultTheme.colors.warning = '#cfcfcfff';
CombinedDefaultTheme.colors.info = '#cfcfcfff';
CombinedDefaultTheme.colors.lightText = '#cfcfcfff';
CombinedDefaultTheme.colors.leftChatBubbleBG = '#b887e633';

//Custimizing dark theme
CombinedDarkTheme.colors.primary = '#fc0362';
CombinedDarkTheme.colors.text = '#fff';
CombinedDarkTheme.colors.secondary = '#5700a8';
CombinedDarkTheme.colors.background = '#292929ff';
CombinedDarkTheme.colors.widgetBG = '#11111188';
CombinedDarkTheme.colors.ok = '#292929ff';
CombinedDarkTheme.colors.error = '#C14242EE';
CombinedDarkTheme.colors.warning = '#292929ff';
CombinedDarkTheme.colors.info = '#292929ff';
CombinedDarkTheme.colors.lightText = '#cfcfcfff';
CombinedDarkTheme.colors.leftChatBubbleBG = '#ffffff88';


function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  //! LEAVE ONLY 1 UNCOMMENTED
  //let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme; //Default theme is light
  let theme = isThemeDark ? CombinedDefaultTheme : CombinedDarkTheme; //Default theme is dark

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <MyStack></MyStack>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>

  );
}

const Stack = createStackNavigator();                 //Creating the stack navigator.

function MyStack() {                   //Main app component
  return (
    <Stack.Navigator
      initialRouteName="MainScreen" // !set this to MainScreen on production! ---------------------------------------------------------------------------------------
      headerMode="none" >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Chatting" component={Chatting} />
      <Stack.Screen name="FlashChat" component={FlashChat} />
      <Stack.Screen name="Story" component={Story} />
      <Stack.Screen name="ViewProfile" component={ViewProfile} />
      <Stack.Screen name="PicEditor" component={PicEditor} />
      <Stack.Screen name="StoryCamera" component={StoryCamera} />
      <Stack.Screen name="StoryViewer" component={StoryViewer} />
      <Stack.Screen name="TextStoryCreator" component={TextStoryCreator} />
    </Stack.Navigator>
  );
}

export default withTheme(App)