import { View, Text } from 'react-native'
import React from 'react'
import { Logo } from '../../assets'
import styles from './styles'

export default function SplashScreen() {
    return (
        <View style={styles.splashScreen}>
            <Logo width={100} height={100}/>
            <Text style={styles.logoTitle}>Gandalf</Text>
        </View>
    )
}