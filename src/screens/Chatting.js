import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Avatar, TouchableRipple } from 'react-native-paper';
import { Dimensions, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Platform } from 'react-native';
import Animated from 'react-native-reanimated'
import * as Animatable from "react-native-animatable";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





export class Chatting extends React.Component {
  render() {
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
              backgroundColor: '#888'
            }}
          />
        </View>

        <View style={{ flexDirection: 'row', height: 50, width: '100%', backgroundColor: '#888' }}>
          <TouchableRipple style={{ width: 40, justifyContent: 'center', alignItems: 'center' }} onPress={() => console.log('PRezionao')}>
            <Icon size={20} name="left"></Icon>
          </TouchableRipple>
          <View style={{ width: 50 }}>
            <Avatar.Image style={{ marginTop: 5, marginLeft: 5 }} size={40} source={{ uri: 'https://www.societyplus.net/upload/photos/2020/11/9FP6DaNMH4PU9Mth9pI4_06_219caf368060b509948cf08a0102afdc_avatar.jpg' }} />
          </View>
          <View style={{ flexGrow: 1, flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>LiLPandemio🚀</Text>
          </View>
          <TouchableRipple style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            //Function
          }}>
            <MaterialIcon name="dots-vertical" size={30}></MaterialIcon>
          </TouchableRipple>
        </View>

        <View style={{ flexGrow: 1, backgroundColor: '#444' }}>
        </View>

        <View style={{ flexDirection: 'row', height: 50, width: '100%' }}>
          <View style={{ flexGrow: 1 }}>

          </View>
          <View style={{ width: 50, backgroundColor: '#ff0' }}>

          </View>

        </View>

      </KeyboardAvoidingView>
    )
  }
}

export default Chatting;
