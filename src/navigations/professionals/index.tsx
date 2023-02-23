import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfManagementScreen from '../../screens/professional';
import { ProfStackParamList } from '../navigationTypes';


const ProfessionalStack = createNativeStackNavigator<ProfStackParamList>();

export default function StackProfessional() {
    return (
        <ProfessionalStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <ProfessionalStack.Screen 
                name="ProfessionalManagement" 
                component={ProfManagementScreen}/>
        </ProfessionalStack.Navigator>
    )
}