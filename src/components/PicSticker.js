import React, { Component, useRef } from "react";
import { Image, Animated, View, StyleSheet, PanResponder, TouchableWithoutFeedback } from "react-native";


class PicSticker extends Component {
    pan = new Animated.ValueXY();
    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (event, gestureState) => {
            this.pan.setOffset({
                x: this.pan.x._value,
                y: this.pan.y._value
            });
        },
        onPanResponderMove: Animated.event([
            null,
            { dx: this.pan.x, dy: this.pan.y }
        ]),
        onPanResponderRelease: () => {
            this.pan.flattenOffset();
        }
    });
    constructor(props) {
        super(props);
        this.state = {
            currentPanValue: { x: 0, y: 0 },

        };
    }

    render() {
        return (
            <View style={{ position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                <Animated.View
                    style={{
                        transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]
                    }}
                    {...this.panResponder.panHandlers}
                >
                    <TouchableWithoutFeedback onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
                        <Image
                            style={{ width: 150, height: 150, resizeMode: "cover" }}
                            source={{
                                uri: 'https://cataas.com/cat',
                            }}
                        />
                    </TouchableWithoutFeedback>
                </Animated.View>
            </View>
        );
    }
}

export default PicSticker;


const StickComponent = () => {
    <View style={{ position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <Animated.View
            style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }} {...panResponder.panHandlers}>
            <TouchableWithoutFeedback onPress={props.onPress} onLongPress={props.onLongPress}>
                <Image
                    style={{ width: 150, height: 150, resizeMode: "cover" }}
                    source={{
                        uri: 'https://cataas.com/cat',
                    }}
                />
            </TouchableWithoutFeedback>
        </Animated.View>
    </View>
}
