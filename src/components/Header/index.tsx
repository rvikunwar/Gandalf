import { View, Text, ViewStyle, TouchableOpacity, TextStyle } from 'react-native'
import React from 'react'
import styles from './style'
import { BackSvg, Logo, ProfileSvg } from '../../assets'


interface HeaderProps {
    title?: string,
    headerStyle?: ViewStyle,
    textStyle?: TextStyle, 
    goToBack?: () => void,
    goToProfile?: () => void,
    logo?: boolean
}

export default function Header({ logo, title, headerStyle, goToBack, goToProfile, textStyle }: HeaderProps) {
    return (
        <View style={[ styles.header, styles.shadow, headerStyle ]}>
            {logo ? 
                <View style={styles.left}>
                    <Logo/>
                    <Text style={[ styles.title, textStyle ]}>{title}</Text>
                </View>: 
                goToBack && <TouchableOpacity onPress={goToBack}>
                    <BackSvg/>
                </TouchableOpacity>}

            { title && !logo ? <Text style={[ styles.title, textStyle ]}>{title}</Text>: null}
            
            {goToProfile && <TouchableOpacity
                onPress={goToProfile}>
                <ProfileSvg width={27} height={27}/>
            </TouchableOpacity>}
        </View>
    )
}