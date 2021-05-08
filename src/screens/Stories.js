/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:43 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-08 19:37:31
 */
import React from 'react'
import { View, Platform, Animated, ScrollView, RefreshControl } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import VisualStories from '../components/VisualStories'
import TextStories from '../components/TextStories'
import { FAB, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

//<VisualStoryUnit StoryPreview="https://cataas.com/cat/says/1000" ProfilePicture="https://cataas.com/cat/says/1001"></VisualStoryUnit>
const Stories = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    const FABbottom = 30;

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Appbar.Header>
                    <Appbar.Content title="Quicks" subtitle={''} />
                    <Appbar.Action icon="magnify" onPress={() => { }} />
                    <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
                </Appbar.Header>

                <View style={{ marginTop: 0 }}>
                    <View style={{ marginLeft: "2.5%" }}>
                        <Text style={{ fontSize: 25, marginTop: "4%", marginBottom: 5 }}>QuickPics:</Text>
                    </View>
                    <VisualStories></VisualStories>
                    <View>
                        <Text style={{ fontSize: 25, marginTop: "4%", marginBottom: 5, marginLeft: "2.5%" }}>QuickText:</Text>
                    </View>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }>
                    <View style={{ flex: 1 }}>
                        <TextStories></TextStories>
                    </View>
                </ScrollView>
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
