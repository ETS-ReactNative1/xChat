/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:32:00 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:32:00 
 */
import React from 'react'
import { TextInput, Button, Appbar, useTheme } from 'react-native-paper'
import Snackbar from 'react-native-snackbar';
import { View, Text } from 'react-native'
import SuperIcon from '../components/SuperIcon'
import { StackActions, useNavigation } from '@react-navigation/native';
import { UploadQuicktext } from '../functions/main';
import EncryptedStorage from 'react-native-encrypted-storage';

const TextStoryCreator = () => {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const popAction = StackActions.pop(1);
    const navigation = useNavigation();
    const [text, setText] = React.useState('');
    const theme = useTheme()
    async function UploadQuicktext() {
        const session = await EncryptedStorage.getItem("user_session");
        const sesdata = JSON.parse(session);
        //---------------------------------------------------------------------------- sesdata.token and text have the necessary info

        fetch('http://192.168.1.200/index.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                do: 'uploadquicktext',
                token: sesdata.token,
                quicktext: text,
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.response === "StoryUploaded") {
                    Snackbar.show({
                        text: 'QuickText Subido!',
                        duration: Snackbar.LENGTH_SHORT,
                    });
                    setText("");
                    navigation.dispatch(popAction)
                } else {
                    Snackbar.show({
                        text: 'Something went wrong :(',
                        duration: Snackbar.LENGTH_SHORT,
                    });
                }
            })
            .catch(err => console.error(err));

        //----------------------------------------------------------------------------
    }
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
                <Appbar.Content title="Publicar QuickText" subtitle={''} />
                <Appbar.Action icon={() => { return <SuperIcon type="Entypo" name="cross" size={23} color="#ffff"></SuperIcon> }} onPress={() => { navigation.dispatch(popAction) }} />
            </Appbar.Header>
            <View style={{
                marginHorizontal: "5%"
            }}>
                {/* MAIN VIEW */}
                <TextInput onChangeText={text => setText(text)} maxLength={1200} multiline={true} numberOfLines={6} style={{ marginTop: 10 }} mode='outlined' label="QuickText"></TextInput>
                <Button style={{ marginTop: 10 }} mode="contained" disabled={false} onPress={() => UploadQuicktext()}>Publicar</Button>
            </View>
        </View>
    )
}

export default TextStoryCreator
