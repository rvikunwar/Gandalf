import { Text, TouchableOpacity, ViewStyle, TextStyle, ActivityIndicator } from 'react-native'
import React from 'react'


interface ButtonProp {
    onPress: () => void,
    style: ViewStyle,
    textStyle: TextStyle,
    title: string;
    isDisabled: boolean;
}

export default function Button({ onPress, style, title, textStyle, isDisabled }: ButtonProp) {
    return (
        <TouchableOpacity 
            disabled={isDisabled}
            onPress={onPress} 
            style={[ style, { flexDirection: "row", alignItems: "center" } ]}>
            <Text style={[ textStyle ]}>{title}</Text>
            { isDisabled && <ActivityIndicator size="small" color="white" />}
        </TouchableOpacity>
    )
}