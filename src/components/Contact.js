import React, { useState } from "react";
import { Badge, Text, Avatar } from 'react-native-paper';
import { View, TouchableNativeFeedback } from 'react-native';
import MyStack from './MyNavigator'
import { useNavigation } from '@react-navigation/native';

function Contact (contactName = 'ContactName', lastMessage = 'LastMessage', onlineStatus = true) {
    const navigation = useNavigation();
    return (
    <TouchableNativeFeedback onPress={() => {
        navigation.navigate("Chatting");
    }}>
        <View>
            <View>
                <View style={{ flexDirection: 'row', height: 50, marginTop: 6, width: '100%' }}>
                    <View style={{ flexDirection: 'row', width: 50 }}>
                        <Avatar.Image style={{ marginTop: 3 }} size={48} source={{ uri: 'https://www.societyplus.net/upload/photos/2020/11/9FP6DaNMH4PU9Mth9pI4_06_219caf368060b509948cf08a0102afdc_avatar.jpg' }} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 6, width: "100%" }}>
                        <View style={{ flexDirection: 'row', paddingTop: 6 }}>
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <View style={{ width: '72.5%' }}>
                                    <Text>LiLPandemio🚀 </Text>
                                </View>
                                <View style={{}}>
                                    <Text style>19:54</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingBottom: 6 }}>
                            <Text>Tengo que ir a comprar pan LoL</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    borderBottomColor: '#888',
                    borderBottomWidth: 1,
                    marginTop: 6,
                    marginBottom: -2
                }}
            />
        </View>
    </TouchableNativeFeedback>
    );
}


export default Contact;
