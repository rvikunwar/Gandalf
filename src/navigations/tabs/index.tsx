import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackBussiness from '../bussiness';
import StackProfessional from '../professionals';
import { BusinessSvg, ProfessionalSvg, SearchSvg } from '../../assets';

const Tab = createBottomTabNavigator();

export default function AdminBottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Professional') {
                            return <ProfessionalSvg fill={focused ? "#10047C": "none"}/>;
                        } else if (route.name === 'Bussiness') {
                            return (<BusinessSvg fill={focused ? "#10047C": "none"}/>);
                        }
                    },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#10047C',
                tabBarLabelStyle: {
                    fontFamily: 'PlusJakartaSans-Regular',
                    fontSize: 15
                }
                })}
                 >

            <Tab.Screen name="Professional" component={StackProfessional}/>
            <Tab.Screen name="Bussiness" component={StackBussiness}/>
        </Tab.Navigator>
    )
}