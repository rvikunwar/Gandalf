import { View, Image } from 'react-native'
import React from 'react'
import styles from './style'

interface AvatarProps {
    image: ReturnType<typeof require>|string;
    size?: number,
}

export default function Avatar({ image, size }: AvatarProps) {
    return (
            <Image 
                style={[{ height: size??60, width: size??60, borderRadius:size??60 }, styles.avatarImage ]} 
                source={image}/>
    )
}