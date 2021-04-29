import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={() => { navigation.push('MainScreen'); }}>Login!</Button>
        </View>
    )
}

export default Login
