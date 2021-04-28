import React, { useState } from "react";
import { Badge, useTheme, Text, Avatar, TouchableRipple } from 'react-native-paper';
import { View, TouchableNativeFeedback } from 'react-native';
import MyStack from './MyNavigator'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'

function Contact(props) {
  const theme = useTheme()
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ marginLeft: 15, marginTop: 5 }}>
        <View style={{ paddingVertical: 20, borderBottomLeftRadius: 50, borderTopLeftRadius: 50, flexDirection: 'row', width: '100%', backgroundColor: theme.colors.widgetBG }}>
          <TouchableRipple onPress={() => { navigation.navigate("Chatting", {contactName: props.contactName, profilePicURL: props.profilePicURL}); }}>
            <View style={{ flexDirection: 'column' }}>
              <View>
                <View style={{ position: 'relative', left: 3, top: 1, flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', width: 57.5 }}>
                    <Avatar.Image style={{ marginTop: -2, marginLeft: 15 }} size={48} source={{ uri: props.profilePicURL }} />
                  </View>
                  <View style={{ flexDirection: 'column', width: '67.5%', marginLeft: 15, flexGrow: 1, }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <Text>{props.contactName}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingBottom: 6 }}>
                      <Text style={{ fontWeight: 'bold' }}>{props.lastMSG} <Text style={{ color: '#888' }}>{props.time}</Text></Text>
                    </View>
                  </View>
                  <View style={{ position: 'relative', top: 6, width: 30 }}>
                    <Icon color={theme.colors.text} name='rightcircleo' size={28}></Icon>
                  </View>
                </View>
              </View>
            </View>
          </TouchableRipple>
        </View>
      </View>
    </View>
  );
}


export default Contact;
