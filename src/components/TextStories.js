import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import TextStoryUnit from './TextStoryUnit'
import { getTextStoriesJSON } from '../functions/main'
const windowHeight = Dimensions.get('window').height;

const TextStories = (props) => {
    //<TextStoryUnit profilePicURL="https://cataas.com/cat/says/1001" time="11:39" txt="Fua tengo que comprar pan"></TextStoryUnit>
    const TextStoryListJSON = getTextStoriesJSON() //! ----------------------- LIST
    //height: windowHeight - 402,
    return (
        <View>
            {TextStoryListJSON.map((TextStory, index) => (
                <TextStoryUnit profilePicURL={TextStory.profilePicURL} time={TextStory.time} txt={TextStory.txt}/>
            ))}
        </View>
    )
}

export default TextStories
