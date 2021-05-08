/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:30:09 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:30:09 
 */
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
                <TextStoryUnit key={TextStory.key} profilePicURL={TextStory.profilePicURL} time={TextStory.time} txt={TextStory.txt}/>
            ))}
        </View>
    )
}

export default TextStories
