/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:29:27 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:29:27 
 */
import React from 'react'
import { View, Text } from 'react-native'

const DragIndicator = () => {
    return (
        <View style={{ height: 20, width: '100%' }}>
            <View
                style={{
                    marginTop: 8,
                    marginBottom: 8,
                    marginLeft: '40%',
                    width: '20%',
                    height: '20%',
                    borderRadius: 10,
                    backgroundColor: theme.colors.primary
                }}
            />
        </View>
    )
}

export default DragIndicator
