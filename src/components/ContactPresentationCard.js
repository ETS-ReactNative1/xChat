/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:29:20 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:29:20 
 */
import React, { useState } from "react";
import { Badge, useTheme, Text, Avatar, TouchableRipple, Chip, Button } from 'react-native-paper';
import { View, TouchableNativeFeedback, Image, Alert } from 'react-native';
import SuperIcon from './SuperIcon'
//TODO: Implement pagination to avoid visual overcharge
//TODO: Re color borders to match current tab
// custom badge () => { return (<SuperIcon type="Entypo" size={20} color={"#cfcfcf"} name="circular-graph" ></SuperIcon>); }
function ContactPresentationCard(props) {
  const ProfilePictureSize = 60;
  const theme = useTheme()
  if (props.profilePicURL == undefined) {
    props.profilePicURL == "https://www.societyplus.net/upload/photos/d-avatar.jpg";
  }
  return (
    <View style={{ flexDirection: "column", borderTopWidth: 1, borderTopColor: theme.colors.error }}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <View style={{ flexDirection: "column", width: "30%", textAlign: "center", alignItems: "center" }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Image source={require('../../assets/img/chroma.gif')} style={{ position: "absolute", width: ProfilePictureSize * 2, height: ProfilePictureSize * 2 }}
            />
            <Avatar.Image style={{ position: "relative" }} size={ProfilePictureSize} source={{ uri: 'https://cataas.com/cat' }} />
          </View>
          <Text style={{ marginTop: 10 }}>LiLPandemio <SuperIcon type="MaterialCommunity" name="check-decagram"></SuperIcon></Text>
        </View>
        <View style={{ flexDirection: "column", width: "70%" }}>
          <View style={{ flexDirection: "row", width: "95%", marginHorizontal: 2.5 }}>
            <View>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "bold" }}>Nombre: </Text>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "bold" }}>Genero: </Text>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "bold" }}>Edad: </Text>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "bold" }}>Pronombres: </Text>
            </View>
            <View style={{ marginLeft: 5 }}>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "200" }}>Markitus </Text>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "200" }}>Masculino </Text>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "200" }}>18 </Text>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "200" }}>El / Los </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column", padding: 10 }}>
        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "bold" }}>Biografía:</Text>
        <Text>Wubba lubba dub dub!</Text>
      </View>
      <View style={{ flexDirection: "column", padding: 10 }}>
        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "bold" }}>Insignias:</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ lineHeight: 40 }}>
              <Chip icon="star" style={{ borderWidth: 1, borderColor: theme.colors.error, flex: -1, margin: 5, backgroundColor: "#111" }} selectedColor="#ff0" onPress={() => Alert.alert('Info', 'Esta medalla indica que este miembro es el propietario de QuickMeet')}>Owner</Chip>{'\u00A0'}
              <Chip icon={() => { return (<SuperIcon type="AntDesign" size={20} color={"#388700"} name="checkcircle"></SuperIcon>); }} style={{ borderWidth: 1, borderColor: theme.colors.error, flex: -1, margin: 5, backgroundColor: theme.colors.background }} selectedColor={theme.colors.text} onPress={() => Alert.alert('Info', 'Esta medalla indica que el perfil es verificado y se trata de una persona real.')}>Verificado</Chip>{'\u00A0'}
              <Chip icon="star" style={{ borderWidth: 1, borderColor: theme.colors.error, flex: -1, margin: 5, backgroundColor: theme.colors.background }} selectedColor={theme.colors.text} onPress={() => Alert.alert('Info', 'Esta medalla indica que el usuario es miembro desde 2021.')}>2021 Team</Chip>{'\u00A0'}
              <Chip icon={() => { return (<SuperIcon type="Entypo" size={20} color={"#f56042"} name="code"></SuperIcon>); }} style={{ borderWidth: 1, borderColor: theme.colors.error, flex: -1, margin: 5, backgroundColor: theme.colors.background }} selectedColor={theme.colors.text} onPress={() => Alert.alert('Info', 'Esta medalla indica que el usuario ha participado en el desarrollo de la aplicacion.')}>Desarrollador</Chip>{'\u00A0'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}


export default ContactPresentationCard;
