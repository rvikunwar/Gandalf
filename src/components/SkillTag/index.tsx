import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function SkillTag({ text }: { text: string}) {
    return (
        <TouchableOpacity disabled style={styles.skillTag}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}