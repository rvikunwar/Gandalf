import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function VerifySwitch() {

    //for toggling - verified/not verified
    const [ isEnabled, setIsEnabled ] = useState(false)
    function toggleSwitch(){
        setIsEnabled(!isEnabled)
    }

    return (
        <View style={styles.verify}>
            <Switch
                trackColor={{false: '#767577', true: '#00BA3E'}}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text style={styles.text}>Verify</Text>
        </View>
    )
}