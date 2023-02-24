import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigationTypes';

import LoginScreen from '../screens/auth/login';
import Toast from 'react-native-toast-message';
import AdminBottomTab from './tabs';
import Profile from '../screens/profile';
import BusinessDetails from '../screens/BusinessDetails';
import ProfessionalDetails from '../screens/professionalDetails';
import { store } from '../store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { Text } from 'react-native';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {

    const auth = true;
    let persistor = persistStore(store);
    
    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
                <NavigationContainer>
                    {
                        auth ?
                        <Stack.Navigator    
                            screenOptions={{
                                headerShown: false
                            }}
                            initialRouteName='Login'>
                            <Stack.Screen 
                                name="Login" 
                                component={LoginScreen}/>

                        </Stack.Navigator>
                        :

                        <Stack.Navigator    
                            screenOptions={{
                                headerShown: false
                            }}
                            initialRouteName='MainScreen'>
                            <Stack.Screen name="MainScreen" component={AdminBottomTab}/>
                            <Stack.Screen name="BusinessDetail" component={BusinessDetails}/>
                            <Stack.Screen name="ProfessionalDetail" component={ProfessionalDetails}/>
                            <Stack.Screen name="Profile" component={Profile}/>

                        </Stack.Navigator>
                        }
                    <Toast/>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}