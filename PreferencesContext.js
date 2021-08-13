import React from 'react';
import {DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme} from 'react-native-paper'
import {DarkTheme} from './src/themes/themes'
export const PreferencesContext = React.createContext({
  setTheme: () => {},
  Theme: DarkTheme,
});
