import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import TextStoryUnit from './TextStoryUnit'
import { getTextStoriesJSON, getQuickTexts } from '../functions/main'
const windowHeight = Dimensions.get('window').height;

const TextStories = (props) => {
    //<TextStoryUnit profilePicURL="https://cataas.com/cat/says/1001" time="11:39" txt="Fua tengo que comprar pan"></TextStoryUnit>
    const TextStoryListJSON = [] //! ----------------------- LIST
    const [textStories, setTextStories] = React.useState([]);
    async function getStories(){
        setTextStories(await getQuickTexts())
    }
    return (
        <View>
            {textStories.map((TextStory, index) => (
                <TextStoryUnit key={TextStory.key} profilePicURL={TextStory.profilePicURL} time={TextStory.time} txt={TextStory.txt} />
            ))}
        </View>
    )
}

export default TextStories
