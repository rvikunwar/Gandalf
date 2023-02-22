import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import styles from './style'


interface TagProps {
    text: string;
    style?: ViewStyle
}

export default function Tag({ text, style }: TagProps) {

    function fillColor(val: string){
        switch(val){
            case "Available": return "#00A938";
            case "Verified": return "#FF0000";
            default: return "#FF0000";
        }
    }
    return (
        <View style={[ styles.tag, { borderColor: fillColor(text) }, style ]}>
            <Text style={[{ color: fillColor(text) }, styles.text]}>{text}</Text>
        </View>
    )
}