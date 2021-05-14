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

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

//<VisualStoryUnit StoryPreview="https://cataas.com/cat/says/1000" ProfilePicture="https://cataas.com/cat/says/1001"></VisualStoryUnit>
const Stories = () => {

    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

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
                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#7a48a8", marginRight: 10 }} onPress={() => { console.log("LMAO") }}>Refresh</Text>
                            <Text style={{ fontSize: 25, marginTop: "1%", marginLeft: 10, marginBottom: 5, flexGrow: 1 }}>QuickPics:</Text>
                        </View>
                    </View>
                    <VisualStories></VisualStories>
                    <View>
                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#7a48a8", top: 8, marginRight: 10 }} onPress={() => { console.log("LMAO") }}>Refresh</Text>
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
                onPress={() => {
                    Snackbar.show({
                        text: 'Subiendo...',
                        duration: Snackbar.LENGTH_SHORT,
                    });
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
                    zIndex: 3
                }}
                icon="camera"
                onPress={() => { navigation.navigate("StoryCamera") }} //Go to camera!
            />
        </View>
    )
}

export default Stories
