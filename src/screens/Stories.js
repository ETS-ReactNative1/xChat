/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:43 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-13 16:32:33
 */
import React from 'react'
import { View, Platform, Animated, ScrollView, RefreshControl } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import VisualStories from '../components/VisualStories'
import TextStories from '../components/TextStories'
import { FAB, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { getQuickTexts } from '../functions/main'
import TextStoryUnit from '../components/TextStoryUnit'
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

//<VisualStoryUnit StoryPreview="https://cataas.com/cat/says/1000" ProfilePicture="https://cataas.com/cat/says/1001"></VisualStoryUnit>
const Stories = () => {

    const FABbottom = 30;

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        refreshQuickTexts().then(() => setRefreshing(false));
    }, []);

    const TextStoryListJSON = [] //! ----------------------- LIST
    const [textStories, setTextStories] = React.useState([]);
    async function refreshQuickTexts(){
        setTextStories(await getQuickTexts())
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Appbar.Header style={{ backgroundColor: "#34803d" }}>
                    <Appbar.Content title="Quick Meet" subtitle={''} />
                    <Appbar.Action icon="magnify" onPress={() => { }} />
                    <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
                </Appbar.Header>

                <View style={{ marginTop: 0 }}>
                    <View style={{ marginLeft: "2.5%" }}>
                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#34803d", marginRight: 10 }} onPress={() => { console.log("LMAO") }}>Refresh</Text>
                            <Text style={{ fontSize: 25, marginTop: "1%", marginLeft: 10, marginBottom: 5, flexGrow: 1 }}>QuickPics:</Text>
                        </View>
                    </View>
                    <VisualStories></VisualStories>
                    <View>
                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#34803d", top: 8, marginRight: 10 }} onPress={() => { 
                                setRefreshing(true);
                                refreshQuickTexts()
                                setRefreshing(false); }}>Refresh</Text>
                            <Text style={{ fontSize: 25, marginTop: "4%", marginLeft: 10, marginBottom: 5, flexGrow: 1 }}>QuickText:</Text>
                        </View>
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
                        <View>
                            {textStories.map((TextStory, index) => (
                                <TextStoryUnit key={TextStory.key} profilePicURL={TextStory.profilePicURL} time={TextStory.time} txt={TextStory.txt} />
                            ))}
                        </View>
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
                    zIndex: 3,
                    backgroundColor: '#34803d'
                }}
                icon="text"
                onPress={() => {
                    navigation.navigate("TextStoryCreator")
                }}
            />
            <FAB
                big
                style={{
                    position: 'absolute',
                    flex: 1,
                    margin: 0,
                    right: 25,
                    bottom: FABbottom,
                    zIndex: 3,
                    backgroundColor: '#34803d'
                }}
                icon="camera"
                onPress={() => { navigation.navigate("StoryCamera") }} //Go to camera!
            />
        </View>
    )
}

export default Stories
