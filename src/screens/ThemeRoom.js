/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:32:05 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:32:05 
 */
import React from 'react'
import { View } from 'react-native'
import { useTheme, Appbar, TouchableRipple, Text } from 'react-native-paper'
import SuperIcon from '../components/SuperIcon'
import { PreferencesContext } from '../../PreferencesContext';
import {LightTheme, DarkTheme, LightCandy, DarkCandy, LightSea, DarkSea} from '../themes/themes'
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
    return (
        <View style={{ flex: 1 }}>
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
                        <Text style={{ fontSize: 15, fontWeight: '100' }}>Muy azul!</Text>
                    </View>
                </View>
            </TouchableRipple>

            <TouchableRipple
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
