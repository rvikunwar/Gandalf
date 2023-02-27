import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import styles from './style'


interface TagProps {
    text: string;
    style?: ViewStyle,
    color: string
}

export default function Tag({ text, style, color }: TagProps) {

    return (
        <View style={[ styles.tag, { borderColor: color }, style ]}>
            <Text style={[{ color: color }, styles.text]}>{text}</Text>
        </View>
    )
}