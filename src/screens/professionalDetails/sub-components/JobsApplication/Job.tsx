import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowDown } from '../../../../assets'
import styles from './style'


interface JobProps {
    id: number;
    jobName: string;
    projectName: string;
    action: number;
    onStatusHandler: () => void;
}

// enum jobApplicationStatus {
//     Applied = 0,
//     Completed = 1,
//     Accepted = 2,
//     Rejected = 3,
//     Hired = 4,
//     NotHired = 5,
// }


export default function Job({ jobName, projectName, action, onStatusHandler }: JobProps) {

    function jobStatus(val: number){
        switch(val){
            case 4: return 'Hired';
            case 5: return 'Not hired';
            case 1: return 'Completed';
            default: return 'Pending'
        }
    }
    
    return (
        <View style={[styles.jobView, styles.shadowProp ] }>
            <View style={styles.left}>
                <View>
                    <Text style={styles.project}>{projectName}</Text>
                    <Text style={styles.position}>{jobName}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.status} onPress={onStatusHandler}>
                <Text style={styles.statusText}>{jobStatus(action)}</Text>
                <ArrowDown width={13} height={13}/>
            </TouchableOpacity>
        </View>
    )
}