import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'


export default function Summary() {
    return (
        <View style={styles.summary}>
            <View style={styles.row}>
                <Text style={styles.title}>Total Projects Completed</Text>
                <Text style={styles.titleAns}>20</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Experience</Text>
                <Text style={styles.titleAns}>5 years</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Total Projects Completed</Text>
                <Text style={styles.titleAns}>20</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Hourly Rate</Text>
                <Text style={styles.titleAns}>$20 / hr</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Qualification</Text>
                <Text style={styles.titleAns}>Master’s Degree</Text>
            </View>
            
            <View style={styles.row}>
                <Text style={styles.title}>Availability</Text>
                <Text style={styles.titleAns}>Hourly</Text>
            </View>
        </View>
    )
}