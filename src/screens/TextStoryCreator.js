/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:32:00 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:32:00 
 */
import React from 'react'
import { TextInput, Button, Appbar } from 'react-native-paper'
import { View, Text } from 'react-native'
import SuperIcon from '../components/SuperIcon'
import { StackActions, useNavigation } from '@react-navigation/native';

const TextStoryCreator = () => {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const popAction = StackActions.pop(1);
    const navigation = useNavigation();
    const [text, setText] = React.useState('');

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: "#34803d" }}>
                <Appbar.Content title="Publicar QuickText" subtitle={''} />
                <Appbar.Action icon={() => { return <SuperIcon type="Entypo" name="cross" size={23} color="#ffff"></SuperIcon> }} onPress={() => { navigation.dispatch(popAction) }} />
            </Appbar.Header>
            <View style={{
                marginHorizontal: "5%"
            }}>
                {/* MAIN VIEW */}
                <TextInput onChangeText={text => setText(text)} multiline={true} numberOfLines={6} style={{marginTop: 10}} mode='outlined' label="QuickText"></TextInput>
                <Button style={{marginTop: 10}} mode="contained" disabled={false} onPress={() => console.log('Pressed')}>Publicar</Button>
            </View>
        </View>
    )
}

export default TextStoryCreator
