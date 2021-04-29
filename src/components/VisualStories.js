import React from 'react'
import { View, Text, FlatList } from 'react-native'
import VisualStoryUnit from './VisualStoryUnit'

const VisualStories = () => {
    return (
        <View>
            <FlatList style={{}} horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                data={[
                    { key: "https://cataas.com/cat/says/1001", profilePicURL: "https://cataas.com/cat/says/1005" },
                    { key: "https://cataas.com/cat/says/1002", profilePicURL: "https://cataas.com/cat/says/1006" },
                    { key: "https://cataas.com/cat/says/1003", profilePicURL: "https://cataas.com/cat/says/1007" },
                    { key: "https://cataas.com/cat/says/1004", profilePicURL: "https://cataas.com/cat/says/1008" },
                    { key: "https://cataas.com/cat/says/10010", profilePicURL: "https://cataas.com/cat/says/10055" },
                    { key: "https://cataas.com/cat/says/10020", profilePicURL: "https://cataas.com/cat/says/10065" },
                    { key: "https://cataas.com/cat/says/10030", profilePicURL: "https://cataas.com/cat/says/10075" },
                    { key: "https://cataas.com/cat/says/10040", profilePicURL: "https://cataas.com/cat/says/10085" },
                ]}
                renderItem={({ item }) => <VisualStoryUnit ProfilePicture={item.profilePicURL} StoryPreview={item.key} />}
            />
        </View>
    )
}

export default VisualStories
