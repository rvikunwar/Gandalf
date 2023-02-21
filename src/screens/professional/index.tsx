import { View, Text } from 'react-native'
import React from 'react'
import { ProfManagementProps } from 'types'
import Card from './sub-components/card'


function ProfessionalManagement({ navigation }: ProfManagementProps) {
    return (
        <View style={{ paddingHorizontal: 20, backgroundColor: '#F5F5F5' }}>

            {new Array(10).fill(0).map((item, index) => (
                <Card key={index}/>
            ))}
        </View>
    )
}

export default ProfessionalManagement