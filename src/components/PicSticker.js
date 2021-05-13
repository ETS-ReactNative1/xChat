/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:29:56 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-13 16:10:14
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    Image, // we want to use an image
    PanResponder, // we want to bring in the PanResponder system
    Animated // we wil be using animated value
} from 'react-native';
import Slider from "react-native-slider"
import SuperIcon from '../components/SuperIcon'
export class PicSticker extends Component {
    constructor(props) {
        super(props);
        const value = 195;
        const showingController = 0;
        this.state = { showingController }
        this.state = { value };
    }

    render() {
        const toggleOpacity = () => {
            if (this.props.sizeController){
                
            }
            if (this.state.showingController == 0) {
                return 1;
            } else {
                return 0;
            }
        }
        return (
            <View>
                <View style={{ flexDirection: 'row', opacity: this.state.showingController }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 40, width: 40, padding: 5, backgroundColor: "#222", marginRight: 5, borderRadius: 100 }}>
                        <SuperIcon type="MaterialCommunity" name="resize" size={25}></SuperIcon>
                    </View>
                    <View style={{ width: this.props.size, backgroundColor: "#222", height: 40, paddingHorizontal: 10, paddingVertical: 0, marginBottom: 2, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <Slider
                            style={{ width: "95%" }}
                            value={this.state.value}
                            maximumValue={300}
                            minimumValue={10}
                            onValueChange={(value) => this.setState({ value })}
                            onSlidingComplete={() => { 
                                console.log("TOGGLE OPACITY!")
                                this.setState({ showingController: toggleOpacity() })
                             }}
                        />
                    </View>
                </View>
                <TouchableWithoutFeedback
                    onLongPress={() => {
                        //Current sticker array
                        var array = this.props.daddystate.stickers
                        //The new array
                        var newArray = []
                        for (let i = 0; i < array.length; i++) {
                            if (array[i].id !== this.props.stickerid) {
                                newArray.push(array[i])
                            } else {
                                console.log(this.props.daddystate.stickers[i].id)
                                //Simplemente no lo copio
                            }
                        }
                        this.props.setState({
                            stickers: newArray
                        })
                    }}
                    onPress={() => this.setState({ showingController: toggleOpacity() }) }>
                    <Image style={{ width: this.state.value, height: this.state.value }} source={{ uri: this.props.imgURI }}></Image>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default PicSticker

