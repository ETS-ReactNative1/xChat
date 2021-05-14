/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:10 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-14 16:46:21
 */
import React from 'react'
import { View, Text, Image, Keyboard } from 'react-native'
import { TextInput, withTheme, useTheme, Avatar, TouchableRipple, FAB } from 'react-native-paper';
import SuperIcon from '../components/SuperIcon';
//<SuperIcon type="ionicons" name="image" color="#fff" size={20}></SuperIcon>
const EditPublicProfile = () => {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                <TouchableRipple borderless style={{ borderRadius: 100 }} onPress={() => { console.log("ShowPic") }}>
                    <View>
                        <Avatar.Image size={150} source={{ uri: 'https://cataas.com/cat' }} />
                    </View>
                </TouchableRipple>
                <TouchableRipple borderless style={{ borderRadius: 100, backgroundColor: theme.colors.primary, position: 'relative', bottom: 40, left: 50 }} onPress={() => { console.log("EditPic") }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 50, height: 50 }}>
                        <SuperIcon type="ionicons" name="image" color="#fff" size={30}></SuperIcon>
                    </View>
                </TouchableRipple>
            </View>
            <View style={{ position: 'relative', top: -30 }}>
                <TextInput color={theme.colors.secondary} style={{ marginTop: 10 }} label="Public name" mode="outlined" placeholder="Public name" />
                <TextInput color={theme.colors.secondary} style={{ marginTop: 20 }} multiline={true} numberOfLines={5} label="Biografía" mode="outlined" placeholder="Cuentanos un poco sobre tí" />
            </View>
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

export default withTheme(EditPublicProfile)
