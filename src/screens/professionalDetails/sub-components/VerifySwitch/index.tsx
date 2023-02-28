import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

interface VerifySwitchProps {
    toggleSwitch: () => void;
    verified: boolean
}

export default function VerifySwitch({ verified, toggleSwitch }: VerifySwitchProps) {

    //for toggling - verified/not verified
    const [ isEnabled, setIsEnabled ] = useState(verified)

    return (
        <View style={styles.verify}>
            <Switch
                trackColor={{false: '#767577', true: '#00BA3E'}}
                thumbColor={verified ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={verified}
            />
        </View>
    )
}

