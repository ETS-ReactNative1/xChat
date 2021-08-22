/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:29:17 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:29:17 
 */
import React, { useState } from "react";
import { Badge, useTheme, Text, Avatar, TouchableRipple } from 'react-native-paper';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import SuperIcon from "./SuperIcon";

function Contact(props) {
  const theme = useTheme()
  const navigation = useNavigation();
  //onPress={() => { navigation.navigate("Chat", {contactName: props.contactName, profilePicURL: props.profilePicURL}); }}
  return (
    <TouchableRipple style={{
      marginTop: 5,
      borderRadius: 10,
      backgroundColor: theme.colors.widgetBG,
      height: 65
    }} borderless onPress={() => { navigation.navigate("Chatting", { contactName: props.contactName, profilePicURL: props.profilePicURL }) }}
    onLongPress={() => {console.log(props.isPinned);}}>
      <View style={{ flexDirection: 'row', width: '100%', }}>
        <View style={{ flexDirection: 'column' }}>
          <View>
            <View style={{ position: 'relative', left: 3, top: 1, flexDirection: 'row' }}>
              <View style={{ marginLeft: 6, marginTop: 6 }}>
                <TouchableRipple rippleColor="rgba(0,0,0,0.8)" style={{ borderRadius: 50 }} borderless onPress={() => { console.log("PRESSED") }}>
                  <Avatar.Image size={50} source={{ uri: props.profilePicURL }} />
                </TouchableRipple>
              </View>
              <View style={{ flexDirection: 'column', width: '83.5%', marginLeft: 15, flexGrow: 1, marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text numberOfLines={1} style={{ width: "80%" }}>{props.contactName}</Text>
                  <Text style={{ color: '#888', width: "20%" }}>{props.time}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 6 }}>
                  <Text numberOfLines={1} style={{ width: "80%", fontWeight: 'bold' }}>{props.lastMSG}</Text>
                  <View style={{width: "20%", marginLeft: "5%"}}>
                    {props.isPinned ? <SuperIcon size={20} type="AntDesign" name="pushpin" style={{ alignSelf: "center", height: 28 }}></SuperIcon> : <View/>}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
}


export default Contact;
