import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Text, TouchableRipple, Avatar, useTheme } from 'react-native-paper'

// https://cataas.com/cat/says/1001
const VisualStoryUnit = (props) => {
    const theme = useTheme()
    if (props.StoryPreview == undefined || props.ProfilePicture == undefined) {
        return <View></View>; //Avoid getting errors
    } else {
        return (
            <View style={{ borderRadius: 10 }}>
                <TouchableRipple style={{ marginRight: 5, borderRadius: 10, backgroundColor: theme.colors.widgetBG, width: 108, height: 192 }} onPress={() => console.log('Pressed')}>
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
