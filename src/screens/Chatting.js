import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Avatar } from 'react-native-paper';
import { Dimensions, KeyboardAvoidingView } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// ? HINT <View style={{ flexDirection: 'row', height: 50, marginTop: 6, width: '100%' }}>

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
          <View style={{ width: 40, backgroundColor: '#0f0' }}>
          </View>
          <View style={{ width: 50, backgroundColor: '#ff0' }}>
            <Avatar.Image style={{ marginTop: 5, marginLeft: 5 }} size={40} source={{ uri: 'https://www.societyplus.net/upload/photos/2020/11/9FP6DaNMH4PU9Mth9pI4_06_219caf368060b509948cf08a0102afdc_avatar.jpg' }} />
          </View>
          <View style={{ flexGrow: 1, backgroundColor: '#0ff' }}></View>
          <View style={{ width: 50, backgroundColor: '#fff' }}></View>
        </View>

        <View style={{ flexGrow: 1, backgroundColor: '#444' }}>

        </View>

        <View style={{ height: 50, width: '100%' }}>

        </View>

      </KeyboardAvoidingView>
    )
  }
}

export default Chatting;
