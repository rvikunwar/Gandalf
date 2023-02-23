import { View, Text } from 'react-native'
import React from 'react'
import SkillTag from '../../../../components/SkillTag'
import styles from './style'

const skills = new Array(8).fill(0)

export default function Skills() {
    return (
        <View style={styles.skillView}>
            <Text style={ styles.title }>Skills</Text>
            <View style={styles.view}>
                {skills.map((item, index) => (
                    <SkillTag key={index}/>
                ))}
            </View>

        </View>
    )
}