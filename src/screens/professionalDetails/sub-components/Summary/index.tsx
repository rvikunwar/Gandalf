import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'


interface QualificationProps{
    id: number,
    profileId: number,
    qualificationId: number,
    qualification: {
        id?: number,
        value?: string
    }
}

interface SummaryProps{
    availability: number| undefined| null;
    hourlyRate: number | undefined| null;
    experience: number | undefined| null;
    qualification: QualificationProps[]
}

export default function Summary({ availability, hourlyRate, experience, qualification }: SummaryProps) {
    return (
        <View style={styles.summary}>
            <View style={styles.row}>
                <Text style={styles.title}>Total Projects Completed</Text>
                <Text style={styles.titleAns}>20</Text>
            </View>

            { experience ? <View style={styles.row}>
                <Text style={styles.title}>Experience</Text>
                <Text style={styles.titleAns}>{experience} years</Text>
            </View>: null }

            { hourlyRate ? <View style={styles.row}>
                <Text style={styles.title}>Hourly Rate</Text>
                <Text style={styles.titleAns}>${hourlyRate} / hr</Text>
            </View>: null }

            { qualification.length > 0 && 
            <View style={styles.row}>
                <Text style={styles.title}>Qualification</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end' }}>
                    {qualification.map((item, index) => (
                        <Text key={index} style={styles.titleAns}> {item.qualification.value},</Text>
                    ))}
                </View>
            </View>}
            
            { availability ? <View style={styles.row}>
                <Text style={styles.title}>Availability</Text>
                <Text style={styles.titleAns}>{availability === 1? 'Hourly': 'Contract'}</Text> 
            </View>: null }
        </View>
    )
}