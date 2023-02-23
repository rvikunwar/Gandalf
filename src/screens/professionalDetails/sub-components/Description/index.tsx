import { View, Text } from 'react-native'
import React from 'react'

export default function Description() {
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
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>
    )
}