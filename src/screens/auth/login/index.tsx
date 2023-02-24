import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './style'
import { Logo } from '../../../assets'
import Button from "../../../components/Button"
import Checkbox from '../../../components/Checkbox'
import Toast from 'react-native-toast-message'
import { validateEmail, validatePassword } from '../../../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useGandalfDispatch, useGandalfSelector } from '../../../hooks'
import { clearState, loginUser, userSelector } from '../../../store/features/authSlice'


export default function Login() {

    const defaultHandler = useMemo(() => ({
        email: "",
        password: ""
    }), []) 
    
    //storing email/ password for login
    const [ formdata, setFormdata ] = useState(defaultHandler)

    //dispatch handler
    const dispatch = useGandalfDispatch()
    const { isSuccess, isError, isFetching, message } = useGandalfSelector(userSelector)

    //on submitting login data for authentication
    const onLoginHandler = () => {

        if(!validateEmail(formdata.email)){
            Toast.show({
                type: 'error',
                text2: 'Email is not valid',
            });
            return;
        }

        const passwordValidation = validatePassword(formdata.password);
        if(passwordValidation !== true){
            Toast.show({
                type: 'error',
                text1: passwordValidation,
            });
            return;
        }

        handleRememberMe();

        dispatch(loginUser(formdata));
    }


    //for checkbox - remember password
    const [ rememberMe, setRememberMe ] = useState(true)

    const handleRememberMe = async () => {
        if (rememberMe) {
            try {
                await AsyncStorage.setItem('email', formdata.email);
                await AsyncStorage.setItem('password', formdata.password);
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                await AsyncStorage.removeItem('email');
                await AsyncStorage.removeItem('password');
            } catch (error) {
                console.error(error);
            }
        }
    };


    useEffect(() => {
        let isRunning = true;
        // Retrieve email and password from AsyncStorage
        const retrieveData = async () => {
            try {
                const storedEmail = await AsyncStorage.getItem('email');
                const storedPassword = await AsyncStorage.getItem('password');
                // debug 
                // console.log(storedEmail, storedPassword, isRunning)
                if (storedEmail && storedPassword && isRunning) {
                    setFormdata({
                        email: storedEmail, password: storedPassword
                    })
                    setRememberMe(true);
                }
            } catch (error) {
                console.error(error);
            }
        };
    
        retrieveData();

        return () => {
            isRunning = false;
        }
    }, []);


    useEffect(()=>{
        if(isError){
            Toast.show({
                type: "error",
                text1: message
            })
            dispatch(clearState())
        }
    },[ isSuccess, isError, message ])


    return (
        <View style={styles.login}>
            <View style={styles.header}>
                <Logo/>
                <Text style={styles.logoTitle}>Gandalf</Text>
            </View>

            <View>
                <Text style={styles.adminLogin}>Admin Login</Text>

                <TextInput 
                    value={formdata.email}
                    style={styles.textBox}
                    onChangeText={(text) => {
                        setFormdata({
                            ...formdata,
                            "email": text
                        })
                    }}
                    placeholder='Email'
                    inputMode='email'
                    placeholderTextColor={"#000000"}/>
                
                <TextInput 
                    value={formdata.password}
                    style={styles.textBox}
                    onChangeText={(text) => {
                        setFormdata({
                            ...formdata,
                            "password": text
                        })
                    }}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor={"#000000"}/>

                <View style={styles.mainStyle}>
                    <Checkbox 
                        size={19}
                        value={rememberMe}
                        textStyle={styles.checkboxText}
                        text="Remember Password"
                        onPress={(isChecked: boolean) => setRememberMe(isChecked)}/>   
                    <Text style={styles.forgotPass}>Forgot password?</Text>             
                </View>

                <Button
                    isDisabled={isFetching}
                    onPress={onLoginHandler}
                    title="Login"
                    style={styles.btnStyle}
                    textStyle={styles.btnTextStyle}
                    />

                <Text style={styles.footerText}>Sign Up © Copyright 2022 Gandalf</Text>
            </View>
        </View>
    )
}