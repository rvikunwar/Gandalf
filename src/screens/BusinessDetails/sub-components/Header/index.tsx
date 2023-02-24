import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import Avatar from '../../../../components/Avatar'
import { Images } from '../../../../assets'
import styles from './style'

export default function Header() {



    return (
        <View style={styles.header}>
            <Avatar image={Images.defaultCompany} size={70}/>
            <View style={styles.details}>
                <Text style={styles.name}>Company Name</Text>
                <Text style={styles.position}>found in -1994</Text>
                <View style={styles.contact}>
                    <Text style={styles.email}>consana@gmail.com</Text>
                    <Text style={styles.phone}>+1  98423 33848</Text>
                </View>

            </View>
        </View>
    )
}