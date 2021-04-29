import React, { Component, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Text, TouchableRipple } from 'react-native-paper';
import SuperIcon from '../components/SuperIcon';

//  flip-camera-ios MaterialIcons
//  circle FontAwesome
//  picture AntDesign

export default function StoryCamera() {
    const [isCamFront, setIsCamFront] = React.useState(false);
    let cam = isCamFront ? "front" : "back"; //Default theme is dark
    const toggleCam = React.useCallback(() => {
        return setIsCamFront(!isCamFront);
    }, [isCamFront]);

    return (
        <View style={styles.container}>
            <RNCamera
                type={cam}
                style={{ flex: 1, alignItems: 'center' }}
            />
            <View style={styles.commanderPannel}>
                <View style={styles.threeZones}>
                    <TouchableRipple onPress={() => { console.log("PRESSED") }} style={{ padding: 12, borderRadius: 100, borderWidth: 3, borderColor: "#fff" }}>
                        <SuperIcon type="AntDesign" name="picture" size={48} color="#fff"></SuperIcon>
                    </TouchableRipple>
                </View>
                <View style={styles.threeZones}>
                    <TouchableRipple onPress={() => { console.log("PRESSED") }} style={{ padding: 8, borderRadius: 150, borderWidth: 3, borderColor: "#fff" }}>
                        <SuperIcon type="Entypo" name="picasa" size={48} color="#fff"></SuperIcon>
                    </TouchableRipple>
                </View>
                <View style={styles.threeZones}>
                    <TouchableRipple onPress={toggleCam} style={{ padding: 12, borderRadius: 100, borderWidth: 3, borderColor: "#fff" }}>
                        <SuperIcon type="MaterialIcons" name="flip-camera-ios" size={48} color="#fff"></SuperIcon>
                    </TouchableRipple>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
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
})