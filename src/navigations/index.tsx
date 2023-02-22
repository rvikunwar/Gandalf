import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigationTypes';

import ProfManagementScreen from '../screens/professional';
import LoginScreen from '../screens/auth/login';
import Toast from 'react-native-toast-message';
import AdminBottomTab from './tabs';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {

    const auth = true;
    
    return (
        <NavigationContainer>
            {
                auth ?
                <Stack.Navigator    
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName='MainScreen'>
                    <Stack.Screen 
                        name="Login" 
                        component={LoginScreen}/>

                </Stack.Navigator>
                :
                <AdminBottomTab/>
            }
            <Toast/>
        </NavigationContainer>
    )
}