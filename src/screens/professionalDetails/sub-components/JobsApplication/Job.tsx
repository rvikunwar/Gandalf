import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowDown, DotSvg } from '../../../../assets'
import styles from './style'


interface JobProps {
    onStatusHandler: () => void;
}

export default function Job({ onStatusHandler }: JobProps) {
    return (
        <View style={styles.jobView}>
            <View style={styles.left}>
                <DotSvg/>
                <View style={styles.content}>
                    <Text style={styles.position}>Project Manager</Text>
                    <Text style={styles.project}>NFT Marketplace</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.status} onPress={onStatusHandler}>
                <Text style={styles.statusText}>Hired</Text>
                <ArrowDown width={13} height={13}/>
            </TouchableOpacity>
        </View>
    )
}