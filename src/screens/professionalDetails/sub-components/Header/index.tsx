import { View, Text } from 'react-native'
import React from 'react'
import Avatar from '../../../../components/Avatar'
import { Images } from '../../../../assets'
import styles from './style'

export default function Header() {
    return (
        <View style={styles.header}>
            <Avatar image={Images.defaultProfile} size={70}/>
            <View style={styles.details}>
                <Text style={styles.name}>Darlene  Roberstone</Text>
                <Text style={styles.position}>Project Manager</Text>
                <View style={styles.row}>
                    <Text style={styles.email}>Darlene123@gmail.com</Text>
                    <Text style={styles.phone}>+1  98423 33848</Text>
                </View>

            </View>

        </View>
    )
}