import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function SkillTag() {
    return (
        <TouchableOpacity disabled style={styles.skillTag}>
            <Text style={styles.text}>React js</Text>
        </TouchableOpacity>
    )
}