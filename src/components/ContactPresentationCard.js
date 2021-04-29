import React, { useState } from "react";
import { Badge, useTheme, Text, Avatar, TouchableRipple, Button } from 'react-native-paper';
import { View, TouchableNativeFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'

function ContactPresentationCard(props) {
  const ProfilePictureSize = 60;
  const theme = useTheme()
  if (props.profilePicURL == undefined) {
    props.profilePicURL == "https://www.societyplus.net/upload/photos/d-avatar.jpg";
  }
  const navigation = useNavigation();
  //onPress={() => { navigation.navigate("Chat", {contactName: props.contactName, profilePicURL: props.profilePicURL}); }}
  return (
    <View style={{ flexDirection: "column", borderTopWidth: 1, borderTopColor: theme.colors.secondary }}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <View style={{ flexDirection: "column", width: "30%", textAlign: "center", alignItems: "center" }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Image source={require('../../assets/img/chroma.gif')} style={{ position: "absolute", width: ProfilePictureSize * 2, height: ProfilePictureSize * 2 }}
            />
            <Avatar.Image style={{ position: "relative" }} size={ProfilePictureSize} source={{ uri: 'https://cataas.com/cat' }} />
          </View>
          <Text style={{ marginTop: 10 }}>LiLPandemio</Text>
        </View>
        <View style={{ flexDirection: "column", width: "70%" }}>
          <View style={{ flexDirection: "row", width: "95%", marginHorizontal: 2.5 }}>
            <View>
              <Text style={{ color: theme.colors.secondary, fontSize: 16, fontWeight: "bold" }}>Nombre: </Text>
              <Text style={{ color: theme.colors.secondary, fontSize: 16, fontWeight: "bold" }}>Genero: </Text>
              <Text style={{ color: theme.colors.secondary, fontSize: 16, fontWeight: "bold" }}>Edad: </Text>
              <Text style={{ color: theme.colors.secondary, fontSize: 16, fontWeight: "bold" }}>Pronombres: </Text>
            </View>
            <View style={{marginLeft: 5}}>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "200" }}>Markitus </Text>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "200" }}>Masculino </Text>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "200" }}>18 </Text>
              <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: "200" }}>El / Los </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column", padding: 10 }}>
        <Text style={{ color: theme.colors.secondary, fontSize: 16, fontWeight: "200" }}>Biografía:</Text>
        <Text>Wubba lubba dub dub!</Text>
      </View>
    </View>
  );
}


export default ContactPresentationCard;
