import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { ArrowDown, DotSvg } from '../../../../assets'
import OptionsModal from '../modal';
import Job from './Job';


const jobs = new Array(10).fill(0);

export default function JobApplication() {

    //for changing status - pending/not hired/hired
    const [ modalVisible, setModalVisible ] = useState(false);
    function onStatusHandler(){
        setModalVisible(true)
    }

    return (
        <View style={styles.job}>
            <Text style={styles.title}>Accepted Job Application</Text>

            {jobs.map((item, index) => (
                <Job 
                    key={index}
                    onStatusHandler={onStatusHandler}/>
            ))}

            <OptionsModal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}/>
        </View>
    )
}