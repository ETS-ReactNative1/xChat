import * as React from 'react';
import { View } from 'react-native'
import { useTheme, TouchableRipple, Switch, Text } from 'react-native-paper';
import { PreferencesContext } from '../../PreferencesContext';

export default function SettingUnit(props) {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  // {props.settingTitle}
  // {props.settingSubTitle}
  // {props.settingController}
  return (
    <View style={{
      flexDirection: 'row-reverse',
      backgroundColor: theme.colors.widgetBG,
      marginHorizontal: 10,
      marginTop: 10,
      height: 75,
      paddingVertical: "3.5%",
      paddingHorizontal: "5%",
      borderRadius: 10
    }}>
      <View style={{
        flexDirection: "row-reverse",

      }}>
        <View style={{ width: "30%" }}>
          {props.settingController}
        </View>
        <View style={{ width: "70%", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.settingTitle}</Text>
          <Text style={{ fontSize: 16, fontWeight: '100' }}>{props.settingSubTitle}</Text>
        </View>
      </View>
    </View>
  );
}
