import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './style'

export default function Loader() {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff"/>
        </View>
    )
}