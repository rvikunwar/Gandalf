import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import styles from './style'


interface TagProps {
    text: string;
    style?: ViewStyle
}

export default function Tag({ text, style }: TagProps) {
    return (
        <View style={[ styles.tag, { borderColor: "#FF0000" }, style ]}>
            <Text style={[{ color: "#FF0000" }, styles.text]}>{text}</Text>
        </View>
    )
}