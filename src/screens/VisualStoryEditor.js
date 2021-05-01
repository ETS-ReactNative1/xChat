import React from 'react'
import { View, Image, ImageBackground } from 'react-native'
import { Avatar, Text } from 'react-native-paper';

const VisualStoryEditor = (props) => {
    console.log(props.route.params.cameraOutput.uri)
    return (
        <View style={{flex:1}}>
            <ImageBackground source={{ uri: props.route.params.cameraOutput.uri }} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
                <Avatar.Image size={100} source={{ uri: props.route.params.cameraOutput.uri }} />
            </ImageBackground>
        </View>
    )
}

export default VisualStoryEditor
