import * as React from 'react';
import { withTheme, Card, Text, Title, Paragraph, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme, Appbar, Provider as PaperProvider } from 'react-native-paper';
import MyNavigator from './src/components/MyNavigator'
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);


function App() {
  return (
    <PaperProvider theme={dark}>
      <NavigationContainer theme={dark}>
        <MyNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default withTheme(App);



// ! ::::::::::::::::::::::::::: THEMES ::::::::::::::::::::::::::: !

const light = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  dark: false,
  roundness: 4,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#705080',
    separator: '#EEE',
  },
};

const dark = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  dark: true,
  roundness: 4,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#502090',
    separator: '#111',
    accent: '#03dac5',
    background: '#121212',
    surface: '#121212',
    error: '#B00020',
    text: '#D8D8D8',
    onSurface: '#121212',
    disabled: '#ababab',
    placeholder: '#828282',
    backdrop: '#828282',
    notification: '#E91E63',
  },
};
