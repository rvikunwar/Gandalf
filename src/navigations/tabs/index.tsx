import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackBussiness from '../bussiness';
import StackProfessional from '../professionals';
import { ProfessionalSvg, SearchSvg } from '../../assets';

const Tab = createBottomTabNavigator();

export default function AdminBottomTab() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Professional') {
                    return <SearchSvg/>;
                } else if (route.name === 'Bussiness') {
                    return (<ProfessionalSvg/>);
                }
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'tomato',
            })} >
            <Tab.Screen name="Professional" component={StackProfessional}/>
            <Tab.Screen name="Bussiness" component={StackBussiness}/>
        </Tab.Navigator>
    )
}