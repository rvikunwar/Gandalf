import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function Description() {
    return (
        <View style={styles.description}>
            <Text style={styles.title}>About Company</Text>
            <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>
    )
}