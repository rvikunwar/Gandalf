import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

interface DescriptionProps{
    aboutMe: string|null|undefined
}

export default function Description({ aboutMe }: DescriptionProps) {
    return (
        <View style={styles.description}>
            <Text style={styles.title}>About Company</Text>
            <Text style={styles.text}>{aboutMe??""} </Text>
        </View>
    )
}
