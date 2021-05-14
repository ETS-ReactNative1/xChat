/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:48 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-14 17:58:18
 */
'use strict';
import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { AppRegistry, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Text, useTheme, TouchableRipple } from 'react-native-paper'
import SuperIcon from '../components/SuperIcon'

const PendingView = () => (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Cargando...</Text>
    </View>
);

export default class StoryCamera extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cameraType: 'back',
            mirrorMode: true,
            flashMode: RNCamera.Constants.FlashMode.off,
            flashModeColor: "#ff0" //#f00 para amarillo
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.commanderPannelTop}>
                    <TouchableRipple onPress={() => {
                        console.log("PRESSED")
                        if (this.state.flashMode === RNCamera.Constants.FlashMode.on) {
                            console.log("Disabled flash")
                            this.setState({ flashMode: RNCamera.Constants.FlashMode.off })
                            this.setState({ flashModeColor: "#666" })
                        } else {
                            console.log("Enabled flash")
                            this.setState({ flashMode: RNCamera.Constants.FlashMode.on })
                            this.setState({ flashModeColor: "#ff0" })
                        }
                    }}>
                        <SuperIcon type="MaterialCommunity" color={this.state.flashModeColor} name="lightning-bolt" size={24}></SuperIcon>
                    </TouchableRipple>
                </View >
                <RNCamera
                    style={styles.preview}
                    type={this.state.cameraType}
                    mirrorImage={this.state.mirrorMode}
                    flashMode={this.state.flashMode}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <PendingView />;
                        return (
                            <View style={styles.commanderPannel}>
                                <View style={styles.threeZones}>
                                    <TouchableRipple onPress={() => { console.log("PRESSED") }} style={{ padding: 12, borderRadius: 100, borderWidth: 3, borderColor: "#fff" }}>
                                        <SuperIcon type="AntDesign" name="picture" size={48} color="#fff"></SuperIcon>
                                    </TouchableRipple>
                                </View>
                                <View style={styles.threeZones}>
                                    <TouchableRipple onPress={() => { this.takePicture(camera) }} style={{ padding: 8, borderRadius: 150, borderWidth: 3, borderColor: "#fff" }}>
                                        <SuperIcon type="Entypo" name="picasa" size={48} color="#fff"></SuperIcon>
                                    </TouchableRipple>
                                </View>
                                <View style={styles.threeZones}>
                                    <TouchableRipple onPress={
                                        () => {
                                            if (this.state.cameraType === 'back') {
                                                this.setState({
                                                    cameraType: 'front',
                                                    mirror: true
                                                });
                                            } else {
                                                this.setState({
                                                    cameraType: 'back',
                                                    mirror: false
                                                });
                                            }
                                        }
                                    } style={{ padding: 12, borderRadius: 100, borderWidth: 3, borderColor: "#fff" }}>
                                        <SuperIcon type="MaterialIcons" name="flip-camera-ios" size={48} color="#fff"></SuperIcon>
                                    </TouchableRipple>
                                </View>
                            </View >
                        );
                    }}
                </RNCamera>
            </View >
        );
    }
    takePicture = async function (camera) {
        const options = { quality: 0.5, base64: true };
        this.props.navigator.navigate('VisualStoryEditor', { cameraOutput: await camera.takePictureAsync(options) })
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    commanderPannel: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#88888888",
        height: 160,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        flexDirection: "row",
    },
    commanderPannelTop: {
        width: "100%",
        zIndex: 3,
        backgroundColor: "#333",
        height: 45,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    threeZones: {
        width: "30%", //30 * 3 = 90 (Quedan 10 para margen horizontal)
        //borderWidth: 1,
        marginLeft: "2.5%",
        alignItems: "center",
        justifyContent: "center"
    }
});