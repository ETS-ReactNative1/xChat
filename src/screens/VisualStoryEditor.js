import React, { Component } from 'react';
import { View, Image, ImageBackground } from 'react-native'
import { Avatar, Text, TouchableRipple } from 'react-native-paper';
import { StickerPicker } from 'react-native-stickers';
import SuperIcon from '../components/SuperIcon'


export default class VisualStoryEditor extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    // }

    render() {
        const imgURI = this.props.route.params.cameraOutput.uri;
        console.log(imgURI)
        const stickers = {
            1: "https://cataas.com/cat",
            2: "https://cataas.com/cat",
            3: "https://cataas.com/cat",
            4: "https://cataas.com/cat",
        }
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={{ uri: imgURI }} style={{ flex: 1, width: "100%", height: "100%", zIndex: 5, resizeMode: "cover", justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", position: "absolute", top: 20, right: 20, borderRadius: 20, backgroundColor: "#0008", padding: 5, paddingHorizontal: 15 }}>
                        <TouchableRipple style={{paddingHorizontal: 2.5, marginHorizontal: 2.5}} onPress={() => { console.log("DOWNLOAD PRESSED") }} >
                            <SuperIcon type="MaterialCommunity" name="download-circle-outline" color="white" size={40}></SuperIcon>
                        </TouchableRipple>
                        <TouchableRipple style={{paddingHorizontal: 2.5, marginHorizontal: 2.5}} onPress={() => { console.log("TEXT STICKER PRESSED") }} >
                            <SuperIcon type="Material" name="text-fields" color="white" size={40}></SuperIcon>
                        </TouchableRipple>
                        <TouchableRipple style={{paddingHorizontal: 2.5, marginHorizontal: 2.5}} onPress={() => { console.log("STICKERS PRESSED") }} >
                            <SuperIcon type="MaterialCommunity" name="sticker-plus-outline" color="white" size={40}></SuperIcon>
                        </TouchableRipple>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
