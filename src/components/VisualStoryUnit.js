/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:30:27 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-08 19:43:14
 */
import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Text, TouchableRipple, Avatar, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

// https://cataas.com/cat/says/1001
const VisualStoryUnit = (props) => {
    const navigation = useNavigation();
    const theme = useTheme()
    if (props.StoryPreview == undefined || props.ProfilePicture == undefined) {
        return <View></View>; //Avoid getting errors
    } else {
        return (
            <View style={{ borderRadius: 10 }}>
                <TouchableRipple borderless style={{ marginHorizontal: 4, borderRadius: 10, backgroundColor: theme.colors.widgetBG, width: 108, height: 192 }} onPress={() => navigation.navigate("Story", {storyImageContent: props.StoryPreview})}>
                    <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: props.StoryPreview }} style={{ borderRadius: 10, flex: 1, resizeMode: "cover", justifyContent: "center" }}>
                        <View style={{ width: 108, height: 192, borderRadius: 10, backgroundColor: "#8888" }}>
                            <Avatar.Image style={{ marginLeft: 30, marginTop: 120 }} size={48} source={{ uri: props.ProfilePicture }} />
                        </View>
                    </ImageBackground>
                </TouchableRipple>
            </View>
        )
    }
}

export default VisualStoryUnit
