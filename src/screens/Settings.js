/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:39 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:31:39 
 */
import * as React from 'react';
import { View } from 'react-native'
import { useTheme, TouchableRipple, Switch, Button, Text } from 'react-native-paper';
import { PreferencesContext } from '../../PreferencesContext';
import SettingUnit from '../components/SettingUnit';
import { StackActions } from '@react-navigation/native';
import SuperIcon from '../components/SuperIcon';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useNavigation } from '@react-navigation/native';
import AuthProvider, { AppContext } from '../context/AuthProvider';
import { getToken } from '../functions/main';
function Settings() {
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    const navigation = useNavigation();
    const [IsLoggedIn, setIsLoggedIn] = React.useContext(AppContext);

    //Kill tokens
    async function removeUserSession() {
        try {
            await EncryptedStorage.removeItem("user_session");
            // Congrats! You've just removed your first value!
        } catch (error) {
            // There was an error on the native side
        }
    }
    async function logOut(all = false) {
        let token = await getToken();
        if (token === null) {
            //ERR
            alert("No token provided");
        } else {
            const out = await fetch('http://192.168.1.200/index.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    do: all ? "logout_all" : "logout",
                    kill_token: token,
                })
            })
            removeUserSession()
            setIsLoggedIn(false)
        }
    }
    //Settings screen
    return (
        <View>
            <View>
                {/* ---------------------------THEME------------------------------ */}
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
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Modo claro</Text>
                            <Text style={{ fontSize: 16, fontWeight: '100' }}>Acaso alguien lo usa?</Text>
                        </View>
                    </View>
                </View>
                {/* -----------------------------BUTTON---------------------------- */}
                <View style={{
                    backgroundColor: "#0000",
                    marginHorizontal: 10,
                    marginTop: 10,
                    height: 50,
                    paddingVertical: "1%",
                    paddingHorizontal: "5%",
                    borderRadius: 10,
                    width: "100%"
                }}>
                    <Button
                        icon={() => { return (<SuperIcon type="AntDesign" color={"#ffff"} name="logout"></SuperIcon>); }}
                        mode="contained"
                        style={{ width: "80%", marginVertical: 0, marginLeft: "10%" }}
                        onPress={() => {
                            logOut(false);
                        }}>
                        Cerrar sesion
                    </Button>

                </View>
                {/* --------------------------------------------------------- */}
                <View style={{
                    backgroundColor: "#0000",
                    marginHorizontal: 10,
                    marginTop: 5,
                    height: 50,
                    paddingVertical: "1%",
                    paddingHorizontal: "5%",
                    borderRadius: 10,
                    width: "100%"
                }}>
                    <Button
                        icon={() => { return (<SuperIcon type="AntDesign" color={"#ffff"} name="logout"></SuperIcon>); }}
                        mode="contained"
                        style={{ width: "80%", marginVertical: 0, marginLeft: "10%" }}
                        onPress={() => {
                            logOut(true);
                        }}>
                        Cerrar todas las sesiones
                    </Button>

                </View>
                {/* --------------------------------------------------------- */}

            </View>
        </View >
    )
}

export default Settings;