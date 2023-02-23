import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { ArrowDown, DotSvg } from '../../../../assets'
import OptionsModal from '../modal';
import Job from './Job';


const jobs = new Array(10).fill(0);

export default function JobApplication() {
    return (
        <View style={styles.job}>
            <Text style={styles.title}>Accepted Job Application</Text>

            {jobs.map((item, index) => (
                <Job key={index}/>
            ))}

            {/* <OptionsModal isVisible={true}/> */}

        </View>
    )
}