import React from 'react'
import { View, Text } from 'react-native'
import { TextInput, withTheme, useTheme, Checkbox } from 'react-native-paper';

const EditPublicProfile = () => {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
            <TextInput color={theme.colors.secondary} style={{ marginTop: 10 }} label="Public name" mode="outlined" placeholder="Public name" />
            {/* Pronombres CHECKBOXS */}

            <TextInput color={theme.colors.secondary} style={{ marginTop: 20 }} multiline={true} numberOfLines={5} label="Biografía" mode="outlined" placeholder="Cuentanos un poco sobre tí" />
        </View>
    )
}

export default withTheme(EditPublicProfile)
