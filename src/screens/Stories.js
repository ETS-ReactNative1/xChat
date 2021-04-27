import React from 'react'
import { View, FlatList } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import StoryUnit from '../components/StoryUnit'
import TextStoryUnit from '../components/TextStoryUnit'
import { Text } from 'react-native-paper'

//https://www.societyplus.net/upload/photos/2021/04/RVAf686VGEfHPTVtucdi_13_6123d3fc2b919e2ab22a895b2a0a1dd6_avatar.jpeg //Bryan
//https://www.societyplus.net/upload/photos/2020/11/9FP6DaNMH4PU9Mth9pI4_06_219caf368060b509948cf08a0102afdc_avatar.jpg //Mark
const exampleImage = 'https://mfiles.alphacoders.com/719/719887.jpg'
export default function StoriesMainView() {
    return (
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
    )
}