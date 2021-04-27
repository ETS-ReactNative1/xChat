import React from 'react';
import { Avatar, Text, useTheme, TouchableRipple } from 'react-native-paper';
import { View, ImageBackground, Image, FlatList } from 'react-native';
import StoryUnit from '../components/StoryUnit'
import TextStoryUnit from '../components/TextStoryUnit'
import SuperIcon from '../components/SuperIcon';
import { SvgUri } from 'react-native-svg';
import StoriesMainView from './Stories'
import { ScrollView } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';
function Profile(props) {
    const theme = useTheme();
    return (
        <View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 50, width: '100%', backgroundColor: theme.colors.primary }}>
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
                        <Text style={{ fontSize: 25, marginTop: "1%", marginLeft: 10, marginBottom: 5 }}>Biografía:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <View style={{ backgroundColor: theme.colors.widgetBG, paddingVertical: 10, paddingHorizontal: 20, width: "35%", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }} >
                                <Text>Nombre:</Text>
                                <Text>Edad:</Text>
                                <Text>Genero:</Text>
                                <Text>Articulo/s:</Text>
                            </View>
                            <View style={{ backgroundColor: theme.colors.widgetBG, paddingVertical: 10, paddingHorizontal: 20, width: "55%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} >
                                <Text style={{ fontWeight: "bold" }}>Marc Moreno</Text>
                                <Text style={{ fontWeight: "bold" }}>18</Text>
                                <Text style={{ fontWeight: "bold" }}>Masculino</Text>
                                <Text style={{ fontWeight: "bold" }}>El / Los</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 0, marginLeft: "2.5%" }}>
                            <Text style={{ fontSize: 25, marginTop: "1%" }}>Historias visuales:</Text>
                            <FlatList style={{}} horizontal
                                data={[
                                    { key: "https://cataas.com/cat/says/1001", profilePicURL: "https://cataas.com/cat/says/1005" },
                                    { key: "https://cataas.com/cat/says/1002", profilePicURL: "https://cataas.com/cat/says/1006" },
                                    { key: "https://cataas.com/cat/says/1003", profilePicURL: "https://cataas.com/cat/says/1007" },
                                    { key: "https://cataas.com/cat/says/1004", profilePicURL: "https://cataas.com/cat/says/1008" },
                                ]}
                                renderItem={({ item }) => <StoryUnit profilePicURL={item.profilePicURL} src={item.key}></StoryUnit>}
                            />
                            <Text style={{ fontSize: 25, marginTop: "7.5%" }}>Historias de Texto:</Text>
                            <TextStoryUnit profilePicURL="https://cataas.com/cat/says/100" time="15:35" txt="Cria cuervos y te sacaran los ojos"></TextStoryUnit>
                            <TextStoryUnit profilePicURL="https://cataas.com/cat/says/101" time="18:35" txt="Pensando en que pensar cansa"></TextStoryUnit>
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
                onPress={() => alert("FAB PRESSED")}
            />
        </View>
    );
}
export default Profile;