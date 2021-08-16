/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:30:21 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:30:21 
 */
import React, { useState } from 'react'
import { View } from 'react-native'
import { Text, TouchableRipple, Avatar, useTheme, Button } from 'react-native-paper'
import Modal from 'react-native-modal';
import WhatsAppTextInput from './msgInput'
import ContactPresentationCard from './ContactPresentationCard'
import { useNavigation } from '@react-navigation/native';
import SuperIcon from './SuperIcon';

const TextStoryUnit = (props) => {
    const theme = useTheme()
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation();
    let time = props.time;
    time = time.substring(11); //180 -----------------------------------------------
    time = time.substring(0, 5);
    //{"CreatorUsername": "LiLPandemio", "profilePicURL": "http://192.168.1.200/userdata/profilepictures/admin.jpg", "time": "2021-08-13 02:40:44", "txt": "I will be there at the same time"}
    if (props.noQuickmeets) {
        return (
            <View style={{ marginTop: 12, marginHorizontal: 12 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>*Ruidos de grillos*</Text>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>Parece que no hay nada que ver aquí, porque no subes una story?</Text>
            </View>
        )
    } else {
        return (
            <View>
                <Modal onBackdropPress={(isModalVisible) => { if (isModalVisible) { toggleModal() } }} onBackButtonPress={(isModalVisible) => { if (isModalVisible) { toggleModal() } }} isVisible={isModalVisible} style={{ alignItems: "center" }} animationIn="zoomIn" animationOut="fadeOutDown">
                    <View style={{ backgroundColor: theme.colors.background, borderRadius: 15 }}>
                        <Button title="Hide modal" color={theme.colors.error} onPress={toggleModal}>Cancelar</Button>
                        <ContactPresentationCard></ContactPresentationCard>
                        <View style={{ flexDirection: "row", borderTopWidth: 1, borderTopColor: theme.colors.error }}>
                            <View style={{ width: "50%", alignItems: "center" }} >
                                {
                                    /**
                                     * //FIXME: Follow/OpenChat buttons ripples overflows¡ing container.
                                     */
                                }
                                <Button style={{ width: "100%" }} color={theme.colors.error} onPress={() => navigation.push("ViewProfile", { username: props.CreatorUsername, imgUri: props.profilePicURL, creatorDisplayname: props.CreatorDisplayname })}>Ver perfil</Button>
                            </View>
                            <View style={{ width: "50%", alignItems: "center" }} >
                                <Button style={{ width: "100%" }} color={theme.colors.error} onPress={() => navigation.navigate("Chatting", { contactName: "The fucking name", profilePicURL: "https://cataas.com/cat" })}>Abrir chat</Button>
                            </View>
                        </View>
                    </View>
                </Modal>
                <TouchableRipple borderless style={{ marginBottom: 10, padding: 10, backgroundColor: theme.colors.widgetBG, borderRadius: 10, width: "95%", marginLeft: "2.5%" }} onPress={() => toggleModal()}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginHorizontal: 7.5, justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
                            <Avatar.Image size={48} source={{ uri: props.profilePicURL }} />
                            <Text style={{ color: theme.colors.text }}>{time}</Text>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ marginRight: "25%", marginLeft: "2.5%" }} >{props.txt}</Text>
                        </View>
                    </View>
                </TouchableRipple >
            </View>
        )
    }
}

function ModalTester() {


    return (
        <View style={{ flex: 1 }}>



        </View>
    );
}

export default TextStoryUnit
