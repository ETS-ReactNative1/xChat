import React, { useState } from 'react'
import { View } from 'react-native'
import { Text, TouchableRipple, Avatar, useTheme, Button } from 'react-native-paper'
import Modal from 'react-native-modal';
import WhatsAppTextInput from './msgInput'
import ContactPresentationCard from './ContactPresentationCard'
import { useNavigation } from '@react-navigation/native';

const TextStoryUnit = (props) => {
    const theme = useTheme()
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation();

    return (
        <View>
            <Modal onBackdropPress={(isModalVisible) => { if (isModalVisible) { toggleModal() } }} onBackButtonPress={(isModalVisible) => { if (isModalVisible) { toggleModal() } }} isVisible={isModalVisible} style={{ alignItems: "center" }} animationIn="zoomIn" animationOut="fadeOutDown">
                <View style={{ backgroundColor: theme.colors.background, borderRadius: 15 }}>
                    <Button title="Hide modal" color={theme.colors.error} onPress={toggleModal}>Cancelar</Button>
                    <ContactPresentationCard></ContactPresentationCard>
                    <View style={{ flexDirection: "row", borderTopWidth: 1, borderTopColor: theme.colors.error }}>
                        <View style={{ width: "50%", alignItems: "center" }} >
                            <Button style={{ width: "100%" }} color={theme.colors.error} onPress={() => { }}>Seguir</Button>
                        </View>
                        <View style={{ width: "50%", alignItems: "center" }} >
                            <Button style={{ width: "100%" }} color={theme.colors.error} onPress={() => navigation.navigate("Chatting", { contactName: "The fucking name", profilePicURL: "https://cataas.com/cat" })}>Abrir chat</Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableRipple style={{ marginTop: 10, padding: 10, backgroundColor: theme.colors.widgetBG, borderRadius: 10, width: "95%", marginLeft: "2.5%" }} onPress={() => toggleModal()}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginHorizontal: 7.5, justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
                        <Avatar.Image size={48} source={{ uri: props.profilePicURL }} />
                        <Text style={{ color: theme.colors.text }}>{props.time}</Text>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ marginRight: "25%", marginLeft: "2.5%" }} >{props.txt}</Text>
                    </View>
                </View>
            </TouchableRipple >
        </View>
    )
}

function ModalTester() {


    return (
        <View style={{ flex: 1 }}>



        </View>
    );
}

export default TextStoryUnit
