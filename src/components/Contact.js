import React, { useState } from "react";
import { Badge, Text, Avatar, TouchableRipple } from 'react-native-paper';
import { View, TouchableNativeFeedback } from 'react-native';
import MyStack from './MyNavigator'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'

function Contact(props) {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{ marginLeft: 15, marginTop: 5 }}>
                <View style={{ boxShadow: 5, shadowColor: '#000', elevation: 2, shadowOffset: { width: -1, height: 1 }, ShadowRadius: 15, paddingVertical: 10, borderBottomLeftRadius: 50, borderTopLeftRadius: 50, flexDirection: 'row', height: 65, width: '100%' }}>
                    <TouchableRipple onPress={() => { navigation.navigate("Chatting"); }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View>
                                <View style={{ position: 'relative', left: 3, top: 1, flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', width: 57.5 }}>
                                        <Avatar.Image style={{ marginTop: -2, marginLeft: 8 }} size={48} source={{ uri: 'https://www.societyplus.net/upload/photos/2020/11/9FP6DaNMH4PU9Mth9pI4_06_219caf368060b509948cf08a0102afdc_avatar.jpg' }} />
                                    </View>
                                    <View style={{ flexDirection: 'column', width: '70%', marginLeft: 6, flexGrow: 1,}}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View>
                                                    <Text>{props.contactName}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', paddingBottom: 6}}>
                                            <Text style={{ fontWeight: 'bold' }}>Tengo que rar pan LoL <Text style={{ color: '#888' }}>19:54</Text></Text>
                                        </View>
                                    </View>
                                    <View style={{ position: 'relative', top: 6, width: 30 }}>
                                        <Icon name='rightcircleo' size={30}></Icon>
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
