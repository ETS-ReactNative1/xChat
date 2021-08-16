/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:32:05 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:32:05 
 */
import React, { useEffect } from 'react'
import { View, Image, Animated } from 'react-native'
import { useTheme, Appbar, TouchableRipple, Text } from 'react-native-paper'
import SuperIcon from '../components/SuperIcon'
import { PreferencesContext } from '../../PreferencesContext';
import { LightTheme, DarkTheme, LightCandy, DarkCandy, LightSea, DarkSea } from '../themes/themes'


const ViewProfile = () => {
    const theme = useTheme()
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const { setTheme, Theme } = React.useContext(PreferencesContext);
    const preferences = React.useMemo(
        () => ({
            setTheme,
            Theme,
        }),
        [setTheme, Theme]
    );

    const FishOpacity = new Animated.Value(0);
    const SharkOpacity = new Animated.Value(0);
    const LCandyOpacity = new Animated.Value(0);
    const DCandyOpacity = new Animated.Value(0);
    const endValue = 1;
    const duration = 1000;

    return (
        <View style={{ flex: 1 }}>
            <View pointerEvents="none" style={{ position: 'absolute', zIndex: 5, flex: 1, left: 0, right: 0, }}>
                <Animated.View style={{ opacity: FishOpacity }}>
                    <Image style={{ width: 200, resizeMode: 'contain' }} source={require("../../assets/img/pez.png")}></Image>
                </Animated.View>
            </View>
            <View pointerEvents="none" style={{ position: 'absolute', zIndex: 5, flex: 1, left: 0, right: 0, }}>
                <Animated.View style={{ opacity: DCandyOpacity }}>
                    <Image style={{ width: 200, marginLeft: "10%", resizeMode: 'contain' }} source={require("../../assets/img/DCandy.png")}></Image>
                </Animated.View>
            </View>
            <View pointerEvents="none" style={{ position: 'absolute', zIndex: 5, flex: 1, left: 0, right: 0, }}>
                <Animated.View style={{ opacity: LCandyOpacity }}>
                    <Image style={{ width: 200, marginLeft: "10%", resizeMode: 'contain' }} source={require("../../assets/img/LCandy.png")}></Image>
                </Animated.View>
            </View>
            <View pointerEvents="none" style={{ position: 'absolute', zIndex: 5, flex: 1, left: 0, right: 0, }}>
                <Animated.View style={{ opacity: SharkOpacity }}>
                    <Image style={{ width: 200, resizeMode: 'contain' }} source={require("../../assets/img/tiburon.png")}></Image>
                </Animated.View>
            </View>
            <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
                <Appbar.Content title="Themes" subtitle={''} />
                {/* <Appbar.Action icon="magnify" onPress={() => { }} /> */}
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </Appbar.Header>
            <TouchableRipple
                onPress={() => {
                    setTheme(LightTheme)
                }}
                style={{
                    flexDirection: 'row-reverse',
                    backgroundColor: theme.colors.widgetBG,
                    marginHorizontal: 10,
                    marginTop: 10,
                    height: 75,
                    paddingVertical: "3.5%",
                    paddingHorizontal: "5%",
                    borderRadius: 10
                }}>
                <View style={{
                    flexDirection: "row-reverse",

                }}>
                    <View style={{ width: "30%", justifyContent: 'center', alignItems: 'center' }}>
                        <SuperIcon type="FontAwesome" name="circle" size={40}></SuperIcon>
                    </View>
                    <View style={{ width: "70%", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Classic light</Text>
                        <Text style={{ fontSize: 15, fontWeight: '100' }}>Un aire claro, muy vanilla!</Text>
                    </View>
                </View>
            </TouchableRipple>

            <TouchableRipple
                onPress={() => {
                    setTheme(DarkTheme)
                }}
                style={{
                    flexDirection: 'row-reverse',
                    backgroundColor: theme.colors.widgetBG,
                    marginHorizontal: 10,
                    marginTop: 10,
                    height: 75,
                    paddingVertical: "3.5%",
                    paddingHorizontal: "5%",
                    borderRadius: 10
                }}>
                <View style={{
                    flexDirection: "row-reverse",

                }}>
                    <View style={{ width: "30%", justifyContent: 'center', alignItems: 'center' }}>
                        <SuperIcon type="FontAwesome" name="circle" size={40}></SuperIcon>
                    </View>
                    <View style={{ width: "70%", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Classic dark</Text>
                        <Text style={{ fontSize: 15, fontWeight: '100' }}>A oscuras!</Text>
                    </View>
                </View>
            </TouchableRipple>

            <TouchableRipple
                onPress={() => {
                    setTheme(LightCandy)
                }}
                onLongPress={() => {
                    Animated.timing(LCandyOpacity, {
                        toValue: endValue,
                        duration: duration,
                        useNativeDriver: true,
                    }).start(() => {
                        Animated.timing(LCandyOpacity, {
                            toValue: 0,
                            duration: duration * 2,
                            useNativeDriver: true,
                        }).start();
                    });
                }}
                style={{
                    flexDirection: 'row-reverse',
                    backgroundColor: theme.colors.widgetBG,
                    marginHorizontal: 10,
                    marginTop: 10,
                    height: 75,
                    paddingVertical: "3.5%",
                    paddingHorizontal: "5%",
                    borderRadius: 10
                }}>
                <View style={{
                    flexDirection: "row-reverse",

                }}>
                    <View style={{ width: "30%", justifyContent: 'center', alignItems: 'center' }}>
                        <SuperIcon type="MaterialCommunity" name="candycane" size={40}></SuperIcon>
                    </View>
                    <View style={{ width: "70%", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Light Candy</Text>
                        <Text style={{ fontSize: 15, fontWeight: '100' }}>Si los colores tuviesen sabor, el rosa seria dulce.</Text>
                    </View>
                </View>
            </TouchableRipple>

            <TouchableRipple
                onPress={() => {
                    setTheme(DarkCandy)
                }}
                onLongPress={() => {
                    Animated.timing(DCandyOpacity, {
                        toValue: endValue,
                        duration: duration,
                        useNativeDriver: true,
                    }).start(() => {
                        Animated.timing(DCandyOpacity, {
                            toValue: 0,
                            duration: duration * 2,
                            useNativeDriver: true,
                        }).start();
                    });
                }}
                style={{
                    flexDirection: 'row-reverse',
                    backgroundColor: theme.colors.widgetBG,
                    marginHorizontal: 10,
                    marginTop: 10,
                    height: 75,
                    paddingVertical: "3.5%",
                    paddingHorizontal: "5%",
                    borderRadius: 10
                }}>
                <View style={{
                    flexDirection: "row-reverse",

                }}>
                    <View style={{ width: "30%", justifyContent: 'center', alignItems: 'center' }}>
                        <SuperIcon type="MaterialCommunity" name="candycane" size={40}></SuperIcon>
                    </View>
                    <View style={{ width: "70%", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Dark candy!</Text>
                        <Text style={{ fontSize: 15, fontWeight: '100' }}>Dulce y oscuro, pero no es chocolate</Text>
                    </View>
                </View>
            </TouchableRipple>

            <TouchableRipple
                onPress={() => {
                    setTheme(LightSea)
                }}
                onLongPress={() => {
                    Animated.timing(FishOpacity, {
                        toValue: endValue,
                        duration: duration,
                        useNativeDriver: true,
                    }).start(() => {
                        Animated.timing(FishOpacity, {
                            toValue: 0,
                            duration: duration * 2,
                            useNativeDriver: true,
                        }).start();
                    });
                }}
                style={{
                    flexDirection: 'row-reverse',
                    backgroundColor: theme.colors.widgetBG,
                    marginHorizontal: 10,
                    marginTop: 10,
                    height: 75,
                    paddingVertical: "3.5%",
                    paddingHorizontal: "5%",
                    borderRadius: 10
                }}>
                <View style={{
                    flexDirection: "row-reverse",

                }}>
                    <View style={{ width: "30%", justifyContent: 'center', alignItems: 'center' }}>
                        <SuperIcon type="MaterialCommunity" name="fish" size={40}></SuperIcon>
                    </View>
                    <View style={{ width: "70%", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Light sea</Text>
                        <Text style={{ fontSize: 15, fontWeight: '100' }}>Con este tema uno se siente como pez en el agua!</Text>
                    </View>
                </View>
            </TouchableRipple>

            <TouchableRipple
                onLongPress={() => {
                    Animated.timing(SharkOpacity, {
                        toValue: endValue,
                        duration: duration,
                        useNativeDriver: true,
                    }).start(() => {
                        Animated.timing(SharkOpacity, {
                            toValue: 0,
                            duration: duration * 2,
                            useNativeDriver: true,
                        }).start();
                    });
                }}
                onPress={() => {
                    setTheme(DarkSea)
                }}
                style={{
                    flexDirection: 'row-reverse',
                    backgroundColor: theme.colors.widgetBG,
                    marginHorizontal: 10,
                    marginTop: 10,
                    height: 75,
                    paddingVertical: "3.5%",
                    paddingHorizontal: "5%",
                    borderRadius: 10
                }}>
                <View style={{
                    flexDirection: "row-reverse",

                }}>
                    <View style={{ width: "30%", justifyContent: 'center', alignItems: 'center' }}>
                        <SuperIcon type="Entypo" name="grooveshark" size={40}></SuperIcon>
                    </View>
                    <View style={{ width: "70%", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Dark sea</Text>
                        <Text style={{ fontSize: 15, fontWeight: '100' }}>Cuidado con los tiburones</Text>
                    </View>
                </View>
            </TouchableRipple>

        </View>
    )
}

export default ViewProfile
