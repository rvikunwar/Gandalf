import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackBussiness from '../bussiness';
import StackProfessional from '../professionals';
import { BusinessSvg, ProfessionalSvg } from '../../assets';
import { BottomTabParamList } from '../../navigations/navigationTypes';


const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function AdminBottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Professional') {
                            return <ProfessionalSvg fill={focused ? "#10047C": "none"}/>;
                        } else if (route.name === 'Business') {
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
            <Tab.Screen name="Business" component={StackBussiness}/>
        </Tab.Navigator>
    )
}