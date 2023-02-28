import { View, Text } from 'react-native'
import React from 'react'

interface DescriptionProps{
    aboutMe: string|null|undefined
}
export default function Description({ aboutMe }: DescriptionProps) {
    return (
        <View
            style={{ 
                paddingHorizontal: 25,
                paddingBottom: 15
            }}>
            <Text style={{
                color: "#66789C",
                fontSize: 15,
                marginTop: 6,
                fontFamily: 'PlusJakartaSans-Medium'
            }}>{aboutMe??""}</Text>
        </View>
    )
}