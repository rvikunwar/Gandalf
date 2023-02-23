import { TouchableOpacity, View, ViewProps } from 'react-native'
import React from 'react'
import { BackSvgv1 } from '../../assets'
import styles from './style'

interface ButtonProps {
    goToBack: () => void,
    style?: ViewProps & { marginLeft: number, marginTop: number }
}

export default function BackButton({ goToBack, style }: ButtonProps) {
    return (
        <TouchableOpacity
            onPress={goToBack} style={[ styles.backbtn, style ]}>
            <BackSvgv1/>
        </TouchableOpacity>
    )
}