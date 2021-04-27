import * as React from 'react';

//Basic libraries
import { withTheme, Card, Text, Title, Paragraph, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme, Appbar, Provider as PaperProvider } from 'react-native-paper';
import MyNavigator from './src/components/MyNavigator';

//Themes and customization
import { PreferencesContext } from './PreferencesContext';
import merge from 'deepmerge';

//Basic app navigation
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

//Mixing libraries
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

//Custimizing light theme
CombinedDefaultTheme.colors.primary = '#5700a8';
CombinedDefaultTheme.colors.text = '#000';
CombinedDefaultTheme.colors.secondary = '#fc0362';
CombinedDefaultTheme.colors.background = '#fffc';
CombinedDefaultTheme.colors.widgetBG = '#ffffff88';
CombinedDefaultTheme.colors.ok = '#cfcfcfff';
CombinedDefaultTheme.colors.error = '#cfcfcfff';
CombinedDefaultTheme.colors.warning = '#cfcfcfff';
CombinedDefaultTheme.colors.info = '#cfcfcfff';
CombinedDefaultTheme.colors.lightText = '#cfcfcfff';
CombinedDefaultTheme.colors.leftChatBubbleBG = '#b887e633';
//Custimizing dark theme
CombinedDarkTheme.colors.primary = '#5700a8';
CombinedDarkTheme.colors.text = '#fff';
CombinedDarkTheme.colors.secondary = '#fc0362';
CombinedDarkTheme.colors.background = '#292929ff';
CombinedDarkTheme.colors.widgetBG = '#11111188';
CombinedDarkTheme.colors.ok = '#292929ff';
CombinedDarkTheme.colors.error = '#292929ff';
CombinedDarkTheme.colors.warning = '#292929ff';
CombinedDarkTheme.colors.info = '#292929ff';
CombinedDarkTheme.colors.lightText = '#cfcfcfff';
CombinedDarkTheme.colors.leftChatBubbleBG = '#ffffff88';




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



