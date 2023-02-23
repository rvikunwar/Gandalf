import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusinessManagementScreen from '../../screens/bussiness';


type BussinessStackParamList = {
    BussinessManagement: undefined;
};

const BussinessStack = createNativeStackNavigator<BussinessStackParamList>();

export default function StackBussiness() {
    return (
        <BussinessStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <BussinessStack.Screen 
                name="BussinessManagement" 
                component={BusinessManagementScreen}/>
        </BussinessStack.Navigator>
    )
}