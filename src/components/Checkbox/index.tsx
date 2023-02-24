import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { TextStyle } from 'react-native/types'


interface CheckboxProps { 
    size: number,
    text: string,
    value: boolean,
    textStyle: TextStyle,
    onPress: (isChecked: boolean) => void
}

export default function Checkbox({ value, size, text, textStyle, onPress }: CheckboxProps) {
    return (
        <BouncyCheckbox
            size={size}
            fillColor="#3C65F5"
            unfillColor="white"
            isChecked={value}
            text={text}
            textStyle={textStyle}
            iconStyle={{ borderRadius: 3 }}
            innerIconStyle={{ borderColor: "#CCCCCC", borderRadius: 3 }}
            onPress={onPress}
            />
    )
}