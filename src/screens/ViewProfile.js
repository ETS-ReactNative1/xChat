/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:32:05 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:32:05 
 */
import React from 'react'
import { View } from 'react-native';
import { FAB, Text } from 'react-native-paper'
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import SuperIcon from '../components/SuperIcon';
import { Animated } from 'react-native';
import { useNavigation, useTheme, StackActions } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import { Pages } from 'react-native-pages';

const ViewProfile = (props) => {
    const { event, ValueXY } = Animated
    const scrollY = new ValueXY()
    const theme = useTheme()
    const navigation = useNavigation();

    const ForeGround = () => {
        return (
            <View style={{ marginTop: 50 }}>
                {/* HEADER HERE */}
                <Header></Header>

            </View>
        )
    }
    const Header = () => {
        return (
            <View style={{ width: "95%", marginLeft: "2.5%", flexDirection: 'column', height: "97.5%", alignItems: 'center' }}>
                <Avatar.Image size={150} source={{ uri: props.route.params.imgUri }} />
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                    {
                        props.route.params.creatorDisplayname
                    }
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    @{
                        props.route.params.username
                    }
                </Text>
                <FAB onPress={() => {navigation.navigate("Chatting", { contactName: "The fucking name", profilePicURL: "https://cataas.com/cat" })}} icon={() => { return (<SuperIcon size={22.5} type="Ionicons" color="white" name="chatbox" />); }} style={{ backgroundColor: theme.colors.primary, position: 'absolute', bottom: 15, left: 10}}></FAB>
            </View>
        )
    }
    const Body = () => {
        return (
            <View>
                <Text>Hello world</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <StickyParallaxHeader
                leftTopIconOnPress={() => { navigation.goBack() }}
                headerType="AvatarHeader"

                title={props.route.params.username}
                subtitle={"Lorem ipsum sit ahmed"}
                image={{ uri: props.route.params.imgUri }}

                foreground={ForeGround}
                renderBody={Body}

                hasBorderRadius={true}
                backgroundColor={theme.colors.widgetBG}
                scrollEvent={event(
                    [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
                    { useNativeDriver: false }
                )}
                parallaxHeight={300}
                transparentHeader={true}
            />
        </View>
    )
}
export default ViewProfile
