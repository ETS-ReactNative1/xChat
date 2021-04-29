import React from 'react'
import { View, Text } from 'react-native'

const ChatTopBar = (props) => {
    return (
        <View style={{ flexDirection: 'row', height: 50, width: '100%', backgroundColor: theme.colors.primary }}>
            <TouchableRipple style={{ width: 40, justifyContent: 'center', alignItems: 'center' }} onPress={() => console.log('Prezionao')}>
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
    )
}

export default ChatTopBar
