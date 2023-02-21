import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types';

import ProfManagementScreen from '../screens/professional';



const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator    
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="ProfessionalManagement" component={ProfManagementScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}