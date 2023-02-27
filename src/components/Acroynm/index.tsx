import { View, Text } from 'react-native'
import React from 'react'
import { acronymName, fetchRandomColor } from '../../utils';
import styles from './style';

interface AcroynmProps {
    name: string;
    size?: number,
}

export default function Acroynm({ name, size }: AcroynmProps) {
    return (
            <View style={{ 
                width: size??25, 
                height: size??25, 
                borderRadius: size?? 15, 
                backgroundColor: fetchRandomColor(acronymName(name)),
                ...styles.acryonm }}>
                <Text style={styles.text}>{acronymName(name??"")}</Text>
            </View>
    )
}