import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusinessManagementScreen from '../../screens/bussiness';
import { BusinessStackParamList } from '../../navigations/navigationTypes';


const BussinessStack = createNativeStackNavigator<BusinessStackParamList>();

export default function StackBussiness() {
    return (
        <BussinessStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <BussinessStack.Screen 
                name="BusinessManagement" 
                component={BusinessManagementScreen}/>

        </BussinessStack.Navigator>
    )
}