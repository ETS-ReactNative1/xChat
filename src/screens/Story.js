/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:45 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:31:45 
 */
import React, { Component } from 'react';
import { View, Image, ImageBackground, FlatList, Alert, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { Avatar, Text, TouchableRipple, ProgressBar } from 'react-native-paper';
import { StickerPicker } from 'react-native-stickers';
import PicSticker from '../components/PicSticker';
import SuperIcon from '../components/SuperIcon'
//props.storyImageContent has the image!
const Story = (props) => {
    const imgURI = props.route.params.storyImageContent
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={{ uri: props.route.params.storyImageContent }} style={{ flex: 1, width: "100%", height: "100%", resizeMode: "cover" }}>
                <View>
                    <View style={{ width: "95%", marginHorizontal: "2.5%", marginTop: 7.5}}>
                        <ProgressBar progress={0.5} style={{borderRadius: 20}} color="#eee"></ProgressBar>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Story
