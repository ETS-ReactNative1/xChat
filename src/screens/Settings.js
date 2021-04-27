import * as React from 'react';
import { View } from 'react-native'
import {useTheme, TouchableRipple, Switch, Text} from 'react-native-paper';
import { PreferencesContext } from '../../PreferencesContext';

function Settings() {
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

    //Settings screen
    return (
        <View>
            <Text>ASD</Text>
            <Switch
                style={[{  }]}
                color={theme.colors.primary}
                value={isThemeDark}
                onValueChange={() => { toggleTheme() }}></Switch>
        </View>
    )
}

export default Settings;