import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import TextStoryUnit from './TextStoryUnit'
import { getTextStoriesJSON } from '../functions/main'
const windowHeight = Dimensions.get('window').height;

const TextStories = (props) => {
    //<TextStoryUnit profilePicURL="https://cataas.com/cat/says/1001" time="11:39" txt="Fua tengo que comprar pan"></TextStoryUnit>
    const TextStoryListJSON = getTextStoriesJSON()
    //height: windowHeight - 402,
    return (
        <FlatList
            style={{ marginTop: 10 }}
            data={TextStoryListJSON}
            renderItem={({ item }) => <TextStoryUnit profilePicURL={item.profilePicURL} time={item.time} txt={item.txt}></TextStoryUnit>}
        />
    )
}

export default TextStories
