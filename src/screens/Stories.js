import React from 'react'
import { View, Platform, Animated } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import VisualStories from '../components/VisualStories'
import TextStories from '../components/TextStories'
import { FAB, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

//<VisualStoryUnit StoryPreview="https://cataas.com/cat/says/1000" ProfilePicture="https://cataas.com/cat/says/1001"></VisualStoryUnit>
const Stories = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    const FABbottom = 380;

    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Appbar.Header>
                    <Appbar.Content title="Quicks" subtitle={''} />
                    <Appbar.Action icon="magnify" onPress={() => { }} />
                    <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
                </Appbar.Header>

                <View style={{ marginTop: 0, marginLeft: "2.5%", paddingBottom: 150, marginBottom: 150 }}>
                    <View>
                        <Text style={{ fontSize: 25, marginTop: "4%" }}>QuickPics:</Text>
                    </View>
                    <View>
                        <VisualStories></VisualStories>
                    </View>
                    <View>
                        <Text style={{ fontSize: 25, marginTop: "4%" }}>QuickText:</Text>
                    </View>
                    <View style={{ marginBottom: 20}}>
                        <TextStories></TextStories>
                    </View>
                </View>
            </View>
            <FAB
                big
                style={{
                    position: 'absolute',
                    flex: 1,
                    margin: 0,
                    right: 25,
                    bottom: FABbottom + 80,
                    zIndex: 3
                }}
                icon="text"
                onPress={() => { }}
            />
            <FAB
                big
                style={{
                    position: 'absolute',
                    flex: 1,
                    margin: 0,
                    right: 25,
                    bottom: FABbottom,
                    zIndex: 3
                }}
                icon="camera"
                onPress={() => { navigation.navigate("StoryCamera") }} //Go to camera!
            />
        </View>
    )
}

export default Stories
