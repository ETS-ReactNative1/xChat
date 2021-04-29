import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper'
import { ThemeConsumer } from 'styled-components';
import { PreferencesContext } from '../../PreferencesContext';

/**
 * TODO: ARREGLAR COLOREH
 */

export function ChatBubble(props) {
  const theme = useTheme();
  
  if(props.amITheSender){
    //I sent the message, use right bubble
    return (
      <View style={{
        backgroundColor: theme.colors.leftChatBubbleBG,
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-start',
        //maxWidth: 500,
        //padding: 14,
        //alignItems:"center",
        borderRadius: 20,
      }}>
        <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }}> {props.message}</Text>
      </View>
    );
  } else {
    //I didn't sent the message, use left instead
    return (
      <View style={{
        backgroundColor: theme.colors.primary,
        padding: 10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        borderRadius: 20,
      }}>
        <Text style={{ fontSize: 16, color: "#fff", }}> {props.message}</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  rightArrow: {
    position: "absolute",
    backgroundColor: "#0078fe",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },

  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eeeeee",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20

  },

  /*Arrow head for recevied messages*/
  leftArrow: {
    position: "absolute",
    backgroundColor: "#dedede",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eeeeee",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20

  },
})