import React from 'react'
import { View, FlatList } from 'react-native'
import TextStoryUnit from './TextStoryUnit'
const TextStories = (props) => {
    //<TextStoryUnit profilePicURL="https://cataas.com/cat/says/1001" time="11:39" txt="Testing"></TextStoryUnit>
    return (
        <View>
            <FlatList style={{}} horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                data={[
                    { key: "ASDDSA", time: "12:45", profilePicURL: "https://cataas.com/cat/says/1005" },
                    { key: "ASDDSA", time: "12:45", profilePicURL: "https://cataas.com/cat/says/1006" },
                    { key: "ASDDSA", time: "12:45", profilePicURL: "https://cataas.com/cat/says/1007" },
                    { key: "ASDDSA", time: "12:45", profilePicURL: "https://cataas.com/cat/says/1008" },
                    { key: "ASDDSA", time: "12:45", profilePicURL: "https://cataas.com/cat/says/10055" },
                    { key: "ASDDSA", time: "12:45", profilePicURL: "https://cataas.com/cat/says/10065" },
                    { key: "ASDDSA", time: "12:45", profilePicURL: "https://cataas.com/cat/says/10075" },
                    { key: "ASDDSA", time: "12:45", profilePicURL: "https://cataas.com/cat/says/10085" },
                ]}
                renderItem={({ item }) => <TextStoryUnit txt={item.key} time={item.time} profilePicURL={item.profilePicURL} />}
            />
        </View>
    )
}

export default TextStories
