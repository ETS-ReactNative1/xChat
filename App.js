import * as React from 'react';
import { withTheme, Card, Text, Title, Paragraph, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme, Appbar, Provider as PaperProvider } from 'react-native-paper';
import MyNavigator from './src/components/MyNavigator'
import { PreferencesContext } from './PreferencesContext';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);


function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

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
          <MyNavigator />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

export default withTheme(App);



// ! ::::::::::::::::::::::::::: THEMES ::::::::::::::::::::::::::: !

const light = {
  ...CombinedDefaultTheme,
  dark: false,
  roundness: 4,
  colors: {
    ...CombinedDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#705080',
    separator: '#EEE',
  },
};

const dark = {
  ...CombinedDarkTheme,
  dark: true,
  roundness: 4,
  colors: {
    ...CombinedDarkTheme.colors,
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
