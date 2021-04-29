import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Dimensions, KeyboardAvoidingView } from 'react-native';

import { ChatTopBar } from '../components/ChatTopBar';
import { DragIndicator } from '../components/DragIndicator';
import { MessageInput } from '../components/MessageInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Chat(props) {
    const theme = useTheme();
    //console.log(props.route.params.contactName);
    //console.log(props.route.params.profilePicURL);
    return (
        <KeyboardAvoidingView style={{ flexDirection: 'column', flexGrow: 1 }}>

            <DragIndicator></DragIndicator>

            <ChatTopBar></ChatTopBar>

            <View style={{ flexGrow: 1 }}>
                <ChatBubble amITheSender={false} hexBG={theme.colors.primary} message="Holaaa"></ChatBubble>
                <ChatBubble amITheSender={true} hexBG={theme.colors.primary} message="Heyy que tal!"></ChatBubble>
                <ChatBubble amITheSender={false} hexBG={theme.colors.primary} message="Bien 😊"></ChatBubble>
                <ChatBubble amITheSender={false} hexBG={theme.colors.primary} message="Me siento solo T_T"></ChatBubble>
                <ChatBubble amITheSender={true} hexBG={theme.colors.primary} message="Sientate con alguien :D"></ChatBubble>
            </View>

            <MessageInput
                style={{ width: 200 }}
                backgroundColor={theme.colors.background}
                borderTopColor={theme.colors.background}
                placeholderTextColor={theme.colors.primary}
                messageTextColor={'#000'}
                textInputBgColor={theme.colors.leftChatBubbleBG}
                editable={true}
                multiline={true}
                keyboardType={'default'}
                sendButtonBgColor={theme.colors.primary}
                sendButtonImage={require('../../assets/img/sendIcon.png')}
                sendButtonDisableColor={'#f5f5f0'}
                sendButtonEnableColor={'#002080'}
            />


        </KeyboardAvoidingView>
    );

}
export default Chat;