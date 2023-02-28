import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowDown, DotSvg } from '../../../../assets'
import styles from './style'


interface JobProps {
    id: number;
    jobName: string;
    projectName: string;
    action: number;
    onStatusHandler: () => void;
}

export default function Job({ jobName, projectName, action, onStatusHandler }: JobProps) {
    return (
        <View style={styles.jobView}>
            <View style={styles.left}>
                <DotSvg/>
                <View style={styles.content}>
                    <Text style={styles.position}>{jobName}</Text>
                    <Text style={styles.project}>{projectName}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.status} onPress={onStatusHandler}>
                <Text style={styles.statusText}>{action}</Text>
                <ArrowDown width={13} height={13}/>
            </TouchableOpacity>
        </View>
    )
}