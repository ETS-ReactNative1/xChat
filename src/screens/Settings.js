/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:39 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:31:39 
 */
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
                            <Switch color={theme.colors.primary} value={isThemeDark} onValueChange={() => { toggleTheme() }}></Switch>
                        </View>
                        <View style={{ width: "70%", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Modo oscuro</Text>
                            <Text style={{ fontSize: 16, fontWeight: '100' }}>¡Únete al lado oscuro!</Text>
                        </View>
                    </View>
                </View>

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
                            <Switch color={theme.colors.primary} value={isThemeDark} onValueChange={() => { toggleTheme() }}></Switch>
                        </View>
                        <View style={{ width: "70%", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Color primario</Text>
                            <Text style={{ fontSize: 16, fontWeight: '100' }}>¡Personaliza la app!</Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Settings;