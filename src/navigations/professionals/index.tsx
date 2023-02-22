import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfManagementScreen from '../../screens/professional';


type ProfStackParamList = {
    ProfessionalManagement: undefined;
};

const ProfessionalStack = createNativeStackNavigator<ProfStackParamList>();

export default function StackProfessional() {
    return (
        <ProfessionalStack.Navigator>
            <ProfessionalStack.Screen 
                name="ProfessionalManagement" 
                component={ProfManagementScreen}/>
        </ProfessionalStack.Navigator>
    )
}