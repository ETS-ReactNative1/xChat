/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:37 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-12 00:47:50
 */
import React from 'react';
import { Avatar, Text, useTheme, TouchableRipple } from 'react-native-paper';
import { View, ImageBackground, Image, FlatList } from 'react-native';
import TextStoryUnit from '../components/TextStoryUnit'
import SuperIcon from '../components/SuperIcon';
import VisualStories from '../components/VisualStories'
import TextStories from '../components/TextStories'
import { ScrollView } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function Profile(props) {
    const theme = useTheme();
    const navigation = useNavigation();
    return (
        <View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 50, width: '100%', backgroundColor: "#7a48a8" }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: theme.colors.lightText }}>@Admin</Text>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ justifyContent: 'center', position: 'relative', top: 50, alignItems: 'center' }}>
                        <Image source={require('../../assets/img/chroma.gif')} style={{ position: "absolute", width: 250, height: 250 }}
                        />
                        <Avatar.Image style={{ position: "relative" }} size={130} source={{ uri: 'https://cataas.com/cat' }} />
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: "25%" }}>
                        <Text style={{ fontSize: 25, marginTop: "1%", marginLeft: 10, marginBottom: 5 }}>Resumen:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <View style={{ backgroundColor: theme.colors.widgetBG, paddingVertical: 10, paddingHorizontal: 20, width: "35%", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }} >
                                <Text>Nombre:</Text>
                                <Text>Edad:</Text>
                                <Text>Genero:</Text>
                                <Text>Pronombre/s:</Text>
                            </View>
                            <View style={{ backgroundColor: theme.colors.widgetBG, paddingVertical: 10, paddingHorizontal: 20, width: "55%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} >
                                <Text style={{ fontWeight: "bold" }}>Marc Moreno</Text>
                                <Text style={{ fontWeight: "bold" }}>18</Text>
                                <Text style={{ fontWeight: "bold" }}>Masculino</Text>
                                <Text style={{ fontWeight: "bold" }}>El / Los</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#7a48a8", marginRight: 10 }} onPress={() => { console.log("LMAO") }}>Refresh</Text>
                            <Text style={{ fontSize: 25, marginTop: "1%", marginLeft: 10, marginBottom: 5, flexGrow: 1 }}>My QuickPics:</Text>
                        </View>

                        <View>
                            <VisualStories></VisualStories>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, position: 'relative', top: 8, color: "#7a48a8", marginRight: 12.5 }} onPress={() => { console.log("LMAO") }}>Refrescar</Text>
                                <Text style={{ fontSize: 25, marginTop: "4%", marginLeft: 10, marginBottom: 5, flexGrow: 1 }}>My QuickTexts:</Text>
                            </View>
                        </View>

                        <View style={{ paddingLeft: 10 }}>
                            <TextStories bottomPadding={10}></TextStories>
                        </View>
                        <Text style={{ fontSize: 25, marginTop: "1%", marginLeft: 10, marginBottom: 5 }}>Estadísticas de usuario:</Text>
                        <View style={{ marginTop: 10, marginBottom: 200 }}>
                            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                                <View style={{ backgroundColor: theme.colors.widgetBG, paddingVertical: 10, paddingHorizontal: 20, width: "35%", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }} >
                                    <Text>Nombre:</Text>
                                    <Text>TF status</Text>
                                    <Text>P.Confianz:</Text>
                                    <Text>Chats totales:</Text>
                                </View>
                                <View style={{ backgroundColor: theme.colors.widgetBG, paddingVertical: 10, paddingHorizontal: 20, width: "55%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} >
                                    <Text style={{ fontWeight: "bold" }}>Marc Moreno</Text>
                                    <Text style={{ fontWeight: "bold" }}>100%</Text>
                                    <Text style={{ fontWeight: "bold" }}>8k</Text>
                                    <Text style={{ fontWeight: "bold" }}>1.6k</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 25, marginTop: "7.5%", marginLeft: "2.5%" }}><SuperIcon size={20} type="AntDesign" name="infocirlce"></SuperIcon> Estadísticas</Text>
                            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                                <View style={{ backgroundColor: theme.colors.widgetBG, paddingVertical: 10, paddingHorizontal: 20, width: "90%", borderRadius: 10 }} >
                                    <Text>TF: Es el factor de confianza. Infica la relevancia del usuario al reportar. Disminuir este factor demasiado puede llevar a sanciones <Text style={{ fontWeight: 'bold', color: '#ff0000' }}>temporales y permanentes</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View></View>
                    </View>
                </View>
            </ScrollView>
            <FAB
                big
                label="Editar"
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 20,
                    bottom: 60,
                }}
                icon="pencil"
                onPress={() => navigation.navigate("EditProfile")}
            />
        </View>
    );
}
export default Profile;