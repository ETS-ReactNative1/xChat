import React from 'react'
import { View, Platform } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import VisualStories from '../components/VisualStories'
import TextStories from '../components/TextStories'
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

//<VisualStoryUnit StoryPreview="https://cataas.com/cat/says/1000" ProfilePicture="https://cataas.com/cat/says/1001"></VisualStoryUnit>
const Stories = () => {
    return (
        <View>

            <Appbar.Header>
                <Appbar.Content title="Quicks" subtitle={''} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </Appbar.Header>
            
            <View style={{ marginTop: 0, marginLeft: "2.5%" }}>
                <Text style={{ fontSize: 25, marginTop: "4%" }}>QuickPics:</Text>
                <VisualStories></VisualStories>
                <Text style={{ fontSize: 25, marginTop: "4%" }}>QuickText:</Text>
                <TextStories></TextStories>
            </View>

        </View>
    )
}

export default Stories
