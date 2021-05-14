/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:18 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-14 16:26:31
 */
import React from 'react'
import { View, Text } from 'react-native'
import { colors } from 'react-native-elements';
import { TextInput, withTheme, useTheme, Button, FAB } from 'react-native-paper';
import SuperIcon from '../components/SuperIcon';

const EditPrivateProfile = () => {
    const theme = useTheme();

    return (

        <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
            <TextInput color={theme.colors.secondary} style={{ marginTop: 10 }} label="Nombre real" mode="outlined" placeholder="Jeff" />
            <TextInput color={theme.colors.secondary} style={{ marginTop: 10 }} label="Apellidos" mode="outlined" placeholder="Bezolla" />
            <FAB
                big
                label="Guardar"
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 20,
                    bottom: 20,
                }}
                icon={() => { return (<SuperIcon size={20} type="Ionicons" color="#048d81" name="save" />); }}
                onPress={() => {
                    console.log("Saving data");
                    Keyboard.dismiss();
                }}
            />
        </View>

    )
}

export default withTheme(EditPrivateProfile)
