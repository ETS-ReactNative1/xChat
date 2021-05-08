/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:30:24 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-08 19:42:34
 */
import React from 'react'
import { View, Text, ScrollView, RefreshControl } from 'react-native'
import VisualStoryUnit from './VisualStoryUnit'
import { getVisualStoriesJSON } from "../functions/main"
const Separator = () => {
    return (<View style={{ width: 10 }} />)
}

const VisualStoriesJSON = getVisualStoriesJSON()
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const VisualStories = () => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View>
            <ScrollView horizontal={true} hide showsHorizontalScrollIndicator={false} StickyHeaderComponent={Separator}>
                {VisualStoriesJSON.map((VisualStory, index) => (
                    <VisualStoryUnit ProfilePicture={VisualStory.profilePicURL} StoryPreview={VisualStory.key} />
                ))}
            </ScrollView>
        </View>
    )
}

export default VisualStories
