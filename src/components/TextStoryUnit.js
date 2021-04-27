import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Text, TouchableRipple, Avatar, useTheme } from 'react-native-paper'

// htamañoTexto63
const StoryUnit = (props) => {
    const theme = useTheme()
    return (
        <TouchableRipple style={{ marginTop: 10, padding: 10, backgroundColor: theme.colors.widgetBG, borderRadius: 10, width: "95%", marginLeft: "2.5%"}} onPress={() => console.log('Pressed')}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginHorizontal: 7.5, justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
                    <Avatar.Image size={48} source={{ uri: props.profilePicURL }} />
                    <Text style={{color: "#888"}}>{props.time}</Text>
                </View>
                <View style={{justifyContent: "center"}}>
                    <Text style={{ marginRight: "25%", marginLeft: "2.5%" }} >{props.txt}</Text>
                </View>
            </View>
        </TouchableRipple >
    )
}

export default StoryUnit
