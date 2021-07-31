/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:01 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:31:01 
 */
import * as React from 'react';
import { Image, View } from 'react-native'
import { useTheme, TouchableRipple, Button, Text, Appbar, TextInput } from 'react-native-paper';
import { PreferencesContext } from '../../PreferencesContext';
import { useNavigation } from '@react-navigation/native';
import SuperIcon from '../components/SuperIcon';

//<Button onPress={() => { navigation.push('MainScreen'); }}>Login!</Button>
const Login = (props) => {
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Appbar.Header style={{ backgroundColor: "#34803d" }}>
                <Appbar.Content title="Quick Meet" subtitle={''} />
                <Appbar.Action icon={() => { return (<SuperIcon type="Feather" size={20} color={"#cfcfcf"} name="moon" ></SuperIcon>); }} onPress={() => { toggleTheme() }} />
            </Appbar.Header>
            <View style={{ flex: 1, paddingHorizontal: "15%", paddingTop: "10%" }}>
                <Image source={require('../../assets/img/LOGO.png')} style={{ width: "100%", height: "20%", resizeMode: 'center' }} />
                <TextInput
                    label="Username"
                    type="flat"
                    style={{
                        //backgroundColor: theme.colors.background
                    }}
                />
                <TextInput
                    label="Password"
                    type="flat"
                    style={{
                        marginTop: 15,
                        //backgroundColor: theme.colors.background
                    }}
                />
                <View style={{ flexDirection: "column", width: "100%", marginTop: 15 }}>
                    <Button mode="outlined" style={{width: "80%", marginVertical: 7.5, marginLeft: "10%"}} onPress={() => console.log('Pressed')}>
                        Registrarse
                    </Button>
                    <Button mode="contained" style={{width: "80%", marginVertical: 7.5, marginLeft: "10%"}} onPress={() => { navigation.push('MainScreen'); }}>
                        Iniciar sesion
                    </Button>
                    <Button mode="text" onPress={() => console.log('Pressed')}>
                        Contraseña olvidada?
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Login
