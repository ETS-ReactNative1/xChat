import * as React from 'react';
import { View } from 'react-native'
import { useTheme, TouchableRipple, Switch, Text } from 'react-native-paper';
import { PreferencesContext } from '../../PreferencesContext';
import SettingUnit from '../components/SettingUnit';

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
            </View>
        </View>
    )
}

export default Settings;