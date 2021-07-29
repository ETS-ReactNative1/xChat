/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:32:08 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-15 23:44:55
 */
import React, { Component } from 'react';
import { View, Image, ImageBackground, FlatList, Alert, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { Avatar, Text, TouchableRipple, Portal, Modal, Provider } from 'react-native-paper';
import { StickerPicker } from 'react-native-stickers';
import PicSticker from '../components/PicSticker';
import SuperIcon from '../components/SuperIcon'
import Draggable from 'react-native-draggable';
import { ScrollView } from 'react-native';
//TODO: Remove sticker option, text...
//TODO: Ripple underflows buttons
//TODO: Remove info button
export default class VisualStoryEditor extends Component {
    constructor(props) {
        super(props);

        const stickers = [];

        const textStickers = [];

        const visibleStickerPicker = true;

        this.state = { visibleStickerPicker }
        this.state = { textStickers };
        this.state = { stickers };
    }
    render() {
        const imgURI = this.props.route.params.cameraOutput; //Debug purposes
        console.log("URI DE LA IMAGEN: " + imgURI)
        const stickersOnline = [
            { id: 1, uri: "https://cataas.com/cat/says/1" },
            { id: 2, uri: "https://cataas.com/cat/says/2" },
            { id: 3, uri: "https://cataas.com/cat/says/3" },
            { id: 4, uri: "https://cataas.com/cat/says/4" },
            { id: 5, uri: "https://cataas.com/cat/says/5" },
            { id: 6, uri: "https://cataas.com/cat/says/6" },
            { id: 7, uri: "https://cataas.com/cat/says/7" },
            { id: 8, uri: "https://cataas.com/cat/says/8" },
            { id: 9, uri: "https://cataas.com/cat/says/9" }
        ]
        return (
            <Provider>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={{ uri: imgURI }} style={{ flex: 1, width: "100%", height: "100%", zIndex: 5, resizeMode: "cover", justifyContent: "center" }}>
                        <Portal>
                            <Modal visible={this.state.visibleStickerPicker} onDismiss={() => { this.setState({ visibleStickerPicker: false }) }}
                                contentContainerStyle={{ justifyContent: 'center', backgroundColor: '#888', width: Dimensions.get('window').width / 3, marginLeft: Dimensions.get('window').width / 3 * 2, borderRadius: 10, height: "80%", position: 'relative', bottom: "10%" }}>
                                <ScrollView style={{}}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}>
                                    {stickersOnline.map((stickerOnline, index) => (
                                        <TouchableRipple
                                            key={stickerOnline.id}
                                            borderless
                                            style={{borderRadius: 10}}
                                            onPress={() => {
                                                //Add sticker   stickerOnline.uri
                                                let last = this.state.stickers.length;
                                                this.setState(prevState => ({
                                                    stickers: [...prevState.stickers, {
                                                        id: last + 1,
                                                        uri: stickerOnline.uri,
                                                        x: Dimensions.get('window').width / 2 - 75,
                                                        y: Dimensions.get('window').height / 2 - 75,
                                                        size: 150,
                                                        sizeController: false,
                                                        isVisible: true,
                                                    }]
                                                }))
                                                this.setState({ visibleStickerPicker: false })
                                            }}>
                                            <Image style={{ borderRadius: 10, margin: 5, width: (Dimensions.get('window').width / 3) - 10, height: (Dimensions.get('window').width / 3) - 10 }} id={stickerOnline.id} source={{ uri: stickerOnline.uri }}></Image>
                                        </TouchableRipple>
                                    ))}
                                </ScrollView>
                            </Modal>
                        </Portal>
                        <View style={{ zIndex: 10, flexDirection: "row", position: "absolute", top: 20, right: 210, borderRadius: 20, backgroundColor: "#0008", padding: 5, paddingHorizontal: 10 }}>
                            <TouchableRipple style={{}} onPress={() => {
                                this.props.navigation.navigate('MainScreen')
                                //console.log(this.props.navigation.navigate)
                            }} >
                                <SuperIcon type="MaterialCommunity" name="progress-upload" color="white" size={40}></SuperIcon>
                            </TouchableRipple>
                        </View>
                        <View style={{ zIndex: 10, flexDirection: "row", position: "absolute", top: 20, right: 280, borderRadius: 20, backgroundColor: "#0008", padding: 5, paddingHorizontal: 10 }}>
                            <TouchableRipple style={{}} onPress={() => {
                                alert("Añade stickers con los controles de la derecha.\nEdita los stickers tocando sobre ellos.\nManten pulsado un sticker para eliminarlo")

                            }} >
                                <SuperIcon type="AntDesign" name="infocirlceo" color="white" size={40}></SuperIcon>
                            </TouchableRipple>
                        </View>
                        <View style={{ zIndex: 10, flexDirection: "row", position: "absolute", top: 20, right: 20, borderRadius: 20, backgroundColor: "#0008", padding: 5, paddingHorizontal: 15 }}>
                            <TouchableRipple style={{ paddingHorizontal: 2.5, marginHorizontal: 2.5 }} onPress={() => { console.log("DOWNLOAD PRESSED") }} >
                                <SuperIcon type="MaterialCommunity" name="download-circle-outline" color="white" size={40}></SuperIcon>
                            </TouchableRipple>
                            <TouchableRipple style={{ paddingHorizontal: 2.5, marginHorizontal: 2.5 }} onPress={() => { console.log("TEXT STICKER PRESSED") }} >
                                <SuperIcon type="Material" name="text-fields" color="white" size={40}></SuperIcon>
                            </TouchableRipple>
                            {/* this.state.stickers.push({ id: 112, uri: "https://cataas.com/cat/says/" + 112}); */}
                            <TouchableRipple style={{ paddingHorizontal: 2.5, marginHorizontal: 2.5 }} onPress={() => { this.setState({ visibleStickerPicker: true }); this.setState() }}>
                                <SuperIcon type="MaterialCommunity" name="sticker-plus-outline" color="white" size={40}></SuperIcon>
                            </TouchableRipple>
                        </View>
                        <View style={{ height: "100%", width: "100%", position: 'absolute' }}>

                            {this.state.stickers.map((sticker, index) => (
                                <Draggable
                                    renderSize={sticker.size}
                                    onDragRelease={(bounds) => {
                                        //console.log(bounds)
                                    }}
                                    x={sticker.x}
                                    y={sticker.y}
                                    onLongPress={() => {
                                        //Eliminar el sticker
                                        console.log("Deleting stasdicker: " + sticker.id)
                                        //Current sticker array
                                        var array = this.state.stickers
                                        //The new array
                                        var newArray = []
                                        for (let i = 0; i < array.length; i++) {
                                            if (array[i].id !== sticker.id) {
                                                newArray.push(array[i])         //No es el que busco
                                            } else {
                                                //Simplemente no lo copio
                                            }
                                        }
                                        this.setState({
                                            stickers: newArray
                                        })
                                    }}
                                    onShortPressRelease={() => { }}
                                >
                                    <PicSticker daddystate={this.state} visible={sticker.isVisible} stickerid={sticker.id} setState={p => { this.setState(p) }} size={sticker.size} sizeController={true} imgURI={sticker.uri} />
                                </Draggable>
                            ))}
                        </View>
                    </ImageBackground>
                </View>
            </Provider>
        );
    }
}