import React from 'react'
import { View, Text } from 'react-native'
import { colors } from 'react-native-elements';
import { TextInput, withTheme, useTheme } from 'react-native-paper';

const EditPrivateProfile = () => {
    const theme = useTheme();

    return (

        <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
            <TextInput color={theme.colors.secondary} label="Real name" mode="outlined" placeholder="Jeff Bezos" />
        </View>
    )
}

export default withTheme(EditPrivateProfile)
