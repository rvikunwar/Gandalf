import { View, Image } from 'react-native'
import React from 'react'
import styles from './style'

interface AvatarProps {
    image: ReturnType<typeof require>;
}

export default function Avatar({ image }: AvatarProps) {
    return (
            <Image 
                style={styles.avatarImage} 
                source={image}/>
    )
}