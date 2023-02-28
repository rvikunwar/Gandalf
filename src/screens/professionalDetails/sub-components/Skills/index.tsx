import { View, Text } from 'react-native'
import React from 'react'
import SkillTag from '../../../../components/SkillTag'
import styles from './style'


interface SkillProps {
    id: number,
    profileId: number,
    skillId: number,
    skill?: {
        id?: number,
        name?: string,
        skillRole?: string
    }
}

export default function Skills({ skills }: { skills: SkillProps[]}) {
    return (
        <View style={styles.skillView}>
            <Text style={ styles.title }>Skills</Text>
            <View style={styles.view}>
                {skills.map((item, index) => (
                    item?.skill?.name && <SkillTag key={index} text={item?.skill?.name}/>
                ))}
            </View>

        </View>
    )
}