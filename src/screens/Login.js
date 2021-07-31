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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import EncryptedStorage from 'react-native-encrypted-storage';

//<Button onPress={() => { navigation.push('MainScreen'); }}>Login!</Button>
const Login = (props) => {
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const navigation = useNavigation();
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    async function doLogin() {
        setbuttonEnable(!buttonEnable);
        //**************************************************************************************
        fetch('http://192.168.1.200/index.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                do: 'login',
                username: textUsername,
                password: textPassword,
            })
        })
            .then(response => response.json())
            .then(response => {
                let token = response.token;
                let respo = response.response;
                if (respo === undefined) {
                    //PWD IS OK
                    Snackbar.show({
                        text: 'Porfavor espere...',
                        duration: Snackbar.LENGTH_SHORT,
                    });
                    EncryptedStorage.setItem(
                        "user_session",
                        JSON.stringify({
                            token: token,
                            username: textUsername,
                        })
                    );
                    navigation.push('MainScreen');
                } else {
                    Snackbar.show({
                        text: 'Sus credenciales no coinciden.',
                        duration: Snackbar.LENGTH_SHORT,
                    });
                }
            })
            .catch(err => console.error(err));
        //**************************************************************************************
    }

    const [textUsername, setTextUsername] = React.useState('');
    const [textPassword, setTextPassword] = React.useState('');
    const [buttonEnable, setbuttonEnable] = React.useState(false);
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
                    autoFocus
                    onChangeText={textUsername => setTextUsername(textUsername)}
                />
                <TextInput
                    label="Password"
                    type="flat"
                    style={{
                        marginTop: 15,
                    }}
                    onChangeText={textPassword => setTextPassword(textPassword)}
                />
                <View style={{ flexDirection: "column", width: "100%", marginTop: 15 }}>
                    <Button icon={() => { return (<SuperIcon type="FontAwesome5" color={"#ffff"} name="bolt"></SuperIcon>); }} mode="contained" disabled={buttonEnable} style={{ width: "80%", marginVertical: 0, marginLeft: "10%" }} onPress={() => {
                        setbuttonEnable(true);
                        doLogin()
                        setTimeout(() => {
                            setbuttonEnable(false);
                        }, 1000);
                    }}>
                        Iniciar sesion
                    </Button>
                    <Button mode="outlined" icon={() => { return (<SuperIcon type="FontAwesome" size={20} name="user-plus"></SuperIcon>); }} disabled={buttonEnable} style={{ width: "80%", marginVertical: 7.5, marginLeft: "10%" }} onPress={() => console.log('Pressed')}>
                        Registrarse
                    </Button>
                    <Button mode="text" disabled={buttonEnable} icon={() => { return (<SuperIcon type="AntDesign" size={24} name="questioncircleo"></SuperIcon>); }} onPress={() => {
                        setbuttonEnable(true);
                        navigation.push('MainScreen')
                        setTimeout(() => {
                            setbuttonEnable(false);
                        }, 1000);
                    }}>
                        Contraseña olvidada?
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Login
