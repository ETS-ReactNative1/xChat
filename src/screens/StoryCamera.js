'use strict';
import React, { PureComponent } from 'react';
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
    render() {
        let targetCam = "front";
        //console.log(this.props.navigator.navigate)

        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
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
                                    <TouchableRipple onPress={() => {

                                    }} style={{ padding: 12, borderRadius: 100, borderWidth: 3, borderColor: "#fff" }}>
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
    threeZones: {
        width: "30%", //30 * 3 = 90 (Quedan 10 para margen horizontal)
        //borderWidth: 1,
        marginLeft: "2.5%",
        alignItems: "center",
        justifyContent: "center"
    }
});