import React from 'react';
import { View } from 'react-native';
import { useTheme, TouchableRipple, Avatar, Text } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
import { ChatBubble } from '../components/ChatBubble'
import { MessageInput } from '../components/MessageInput';
import SuperIcon from '../components/SuperIcon'

function Chat(props) {
    const theme = useTheme();
    //console.log(props.route.params.contactName);
    //console.log(props.route.params.profilePicURL);
    return (
        <KeyboardAvoidingView style={{ flexDirection: 'column', flexGrow: 1 }}>

            <View style={{ height: 20, width: '100%' }}>
                <View
                    style={{
                        marginTop: 8,
                        marginBottom: 8,
                        marginLeft: '40%',
                        width: '20%',
                        height: '20%',
                        borderRadius: 10,
                        backgroundColor: theme.colors.primary
                    }}
                />
            </View>

            <View style={{ flexDirection: 'row', height: 50, width: '100%', backgroundColor: theme.colors.primary }}>
                <TouchableRipple style={{ width: 40, justifyContent: 'center', alignItems: 'center' }} onPress={() => console.log('Prezionao')}>
                    <Text>{"<"}</Text>
                </TouchableRipple>
                <View style={{ width: 50 }}>
                    <Avatar.Image style={{ marginTop: 5, marginLeft: 5 }} size={40} source={{ uri: "https://cataas.com/cat/says/1942" }} />
                </View>
                <View style={{ flexGrow: 1, flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', color: theme.colors.lightText }}>{"AAAAAAA"}</Text>
                </View>
                <TouchableRipple style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        //Function
                    }}>
                    <SuperIcon type="MaterialIcons" name="dots-vertical" color={theme.colors.lightText} size={30}></SuperIcon>
                </TouchableRipple>
            </View>

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
export default Chat