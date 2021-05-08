/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:19 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:31:19 
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Avatar, TouchableRipple, useTheme } from 'react-native-paper';
import { Dimensions, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Platform } from 'react-native';
import Animated from 'react-native-reanimated'
import * as Animatable from "react-native-animatable";
import WhatsAppTextInput from '../components/msgInput';
import { ChatBubble } from '../components/ChatBubble';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Chatting(props) {
  const theme = useTheme();
  const navigation = useNavigation();

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
        <TouchableRipple style={{ width: 40, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Icon size={20} color={theme.colors.lightText} name="left"></Icon>
        </TouchableRipple>
        <View style={{ width: 50 }}>
          <Avatar.Image style={{ marginTop: 5, marginLeft: 5 }} size={40} source={{ uri: props.route.params.profilePicURL }} />
        </View>
        <View style={{ flexGrow: 1, flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
          <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', color: theme.colors.lightText }}>{props.route.params.contactName}</Text>
        </View>
        <TouchableRipple style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            //Function
          }}>
          <MaterialIcon name="dots-vertical" color={theme.colors.lightText} size={30}></MaterialIcon>
        </TouchableRipple>
      </View>
      <View style={{ flexGrow: 1, }}>
        <ChatBubble amITheSender={false} hexBG={theme.colors.primary} message="Holaaa"></ChatBubble>
        <ChatBubble amITheSender={true} hexBG={theme.colors.primary} message="Heyy que tal!"></ChatBubble>
        <ChatBubble amITheSender={false} hexBG={theme.colors.primary} message="Bien 😊"></ChatBubble>
        <ChatBubble amITheSender={false} hexBG={theme.colors.primary} message="Me siento solo T_T"></ChatBubble>
        <ChatBubble amITheSender={true} hexBG={theme.colors.primary} message="Sientate con alguien :D"></ChatBubble>

      </View>

      <WhatsAppTextInput
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
export default Chatting;