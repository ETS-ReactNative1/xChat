import React, { Component } from 'react';
import { View, Image, ImageBackground, FlatList } from 'react-native'
import Draggable from 'react-native-draggable';
import { Avatar, Text, TouchableRipple } from 'react-native-paper';
import { StickerPicker } from 'react-native-stickers';
import SuperIcon from '../components/SuperIcon'
import { Dimensions } from 'react-native';




export default class VisualStoryEditor extends Component {
    constructor(props) {
        super(props);

        const stickers = [];

        this.state = { stickers };
    }
    render() {
        const imgURI = this.props.route.params.cameraOutput.uri;
        //console.log(imgURI)
        const xsize = Dimensions.get('window').width;
        const vsize = Dimensions.get('window').height;
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={{ uri: imgURI }} style={{ flex: 1, width: "100%", height: "100%", zIndex: 5, resizeMode: "cover", justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", position: "absolute", top: 20, right: 210, borderRadius: 20, backgroundColor: "#0008", padding: 5, paddingHorizontal: 10 }}>
                        <TouchableRipple style={{}} onPress={() => { console.log("DOWNLOAD PRESSED") }} >
                            <SuperIcon type="MaterialCommunity" name="progress-upload" color="white" size={40}></SuperIcon>
                        </TouchableRipple>
                    </View>
                    <View style={{ flexDirection: "row", position: "absolute", top: 20, right: 20, borderRadius: 20, backgroundColor: "#0008", padding: 5, paddingHorizontal: 15 }}>
                        <TouchableRipple style={{ paddingHorizontal: 2.5, marginHorizontal: 2.5 }} onPress={() => { console.log("DOWNLOAD PRESSED") }} >
                            <SuperIcon type="MaterialCommunity" name="download-circle-outline" color="white" size={40}></SuperIcon>
                        </TouchableRipple>
                        <TouchableRipple style={{ paddingHorizontal: 2.5, marginHorizontal: 2.5 }} onPress={() => { console.log("TEXT STICKER PRESSED") }} >
                            <SuperIcon type="Material" name="text-fields" color="white" size={40}></SuperIcon>
                        </TouchableRipple>
                        {/* this.state.stickers.push({ id: 112, uri: "https://cataas.com/cat/says/" + 112}); */}
                        <TouchableRipple style={{ paddingHorizontal: 2.5, marginHorizontal: 2.5 }} onPress={() => {
                            let last = this.state.stickers.length;
                            this.setState(prevState => ({
                                stickers: [...prevState.stickers, {
                                    id: last + 1,
                                    uri: "https://cataas.com/cat/says/" + last + 1
                                }]
                            }))
                        }} >
                            <SuperIcon type="MaterialCommunity" name="sticker-plus-outline" color="white" size={40}></SuperIcon>
                        </TouchableRipple>
                    </View>
                    {this.state.stickers.map((sticker, index) => (
                        <Draggable
                            x={(Dimensions.get('window').width / 2) - 75} y={(Dimensions.get('window').height / 2) - 75} renderSize={150}
                            imageSource={{ uri: sticker.uri }}
                            isCircle
                            onDragRelease={this._changeFace}
                            onLongPress={() => {
                                // console.log("-----DEBUG AREA-----")
                                console.log("This sticker has id: " + sticker.id)
                                var array = this.state.stickers

                                // console.log("Array created")
                                var newArray = []

                                // console.log("Begin filter")
                                for (let i = 0; i < array.length; i++) {
                                    if (array[i].id !== sticker.id) {
                                        newArray.push(array[i])
                                    } else {
                                        //Skip it because we want to delete
                                    }
                                }
                                for (let i = 0; i < newArray.length; i++) {
                                    // console.log(">>>>>>>>>>>>>>>>>>" + newArray[i].id)
                                }
                                // console.log(newArray)
                                //Now newArray is filtered! Time to update
                                this.setState({
                                    stickers: newArray
                                })
                                // console.log("-----DEBUG AREA END-----")
                            }} //Remove sticker
                            onShortPressRelease={() => console.log('press drag')}
                        //onPressIn={() => console.log('in press')}
                        //onPressOut={() => console.log('out press')}
                        />
                    ))}

                </ImageBackground>
            </View>
        );
    }
}
