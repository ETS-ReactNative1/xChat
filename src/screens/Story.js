/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:45 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:31:45 
 */
import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native'
import { ProgressBar } from 'react-native-paper';
//props.storyImageContent has the image!

export class Story extends Component {
    constructor(props) {
        super(props);
        const progress = 0;
        this.state = { progress };
    }
    render() {
        return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={{ uri: this.props.route.params.storyImageContent }} style={{ flex: 1, width: "100%", height: "100%", resizeMode: "cover" }}>
                <View>
                    <View style={{ width: "95%", marginHorizontal: "2.5%", marginTop: 7.5}}>
                        <ProgressBar progress={this.state.progress} style={{borderRadius: 20}} color="#eee"></ProgressBar>
                    </View>
                </View>
            </ImageBackground>
        </View>
        )
    }
    componentDidMount() { 
        this._mounted = true;
        for (let i; i < 1; i+= 0.1){
            this.setState({ progress: i })
        }
    }
      
}

export default Story
