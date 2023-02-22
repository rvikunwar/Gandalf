import { Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import React from 'react'


interface ButtonProp {
    onPress: () => void,
    style: ViewStyle,
    textStyle: TextStyle,
    title: string
}

export default function Button({ onPress, style, title, textStyle }: ButtonProp) {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[ style ]}>
            <Text style={[ textStyle ]}>{title}</Text>
        </TouchableOpacity>
    )
}