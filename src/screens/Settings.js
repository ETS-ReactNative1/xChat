import * as React from 'react';
import { View } from 'react-native'
import { useTheme, TouchableRipple, Switch, Text } from 'react-native-paper';
import { PreferencesContext } from '../../PreferencesContext';
import SettingUnit from '../components/SettingUnit';
// TODO: Input HEX COLOR -> Override default Primary color
function Settings() {
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

    //Settings screen
    return (
        <View>
            <View>
                <SettingUnit settingController={
                    <Switch
                        color={theme.colors.primary}
                        value={isThemeDark}
                        onValueChange={() => { toggleTheme() }}></Switch>
                } settingSubTitle="Control principal del tema" settingTitle="Dark mode"></SettingUnit>

                <SettingUnit settingController={
                    <Switch
                        color={theme.colors.primary}
                        value={isThemeDark}
                        onValueChange={() => { toggleTheme() }}></Switch>
                } settingSubTitle="Cambia el color principal" settingTitle="Color primario"></SettingUnit>

            </View>
        </View>
    )
}

export default Settings;