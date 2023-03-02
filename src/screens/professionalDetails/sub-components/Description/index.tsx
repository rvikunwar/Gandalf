import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

interface DescriptionProps{
    aboutMe: string|null|undefined
}
export default function Description({ aboutMe }: DescriptionProps) {
    console.log(aboutMe, 'aout')
    return (
        <View
            style={styles.description}>
            <Text style={styles.aboutMe}>{aboutMe??""}</Text>
        </View>
    )
}