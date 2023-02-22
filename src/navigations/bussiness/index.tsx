import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfManagementScreen from '../../screens/professional';

type BussinessStackParamList = {
    BussinessManagement: undefined;
};

const BussinessStack = createNativeStackNavigator<BussinessStackParamList>();

export default function StackBussiness() {
    return (
        <BussinessStack.Navigator>
            <BussinessStack.Screen 
                name="BussinessManagement" 
                component={ProfManagementScreen}/>
        </BussinessStack.Navigator>
    )
}