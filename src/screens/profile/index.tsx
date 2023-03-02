import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LogoutSvg } from '../../assets'
import styles from './style'
import BackButton from '../../components/BackButton'
import { ProfileScreenNavigationProp } from '../../navigations/navigationTypes'
import { useGandalfDispatch, useGandalfSelector } from '../../hooks'
import { logout, userSelector } from '../../store/features/authSlice'
import Acroynm from '../../components/Acroynm'


export default function Profile({  navigation }: ProfileScreenNavigationProp ) {

    //dispatch handler
    const disptach =  useGandalfDispatch();
    function logoutHandler(){
        disptach(logout());
    }

    //selector - user
    const { firstName, lastName, email, contact } = useGandalfSelector(userSelector)

    return (
        <View style={[{ backgroundColor: "white", flex: 1, }]}>
            
            <BackButton 
                goToBack={()=> { navigation.goBack() }} 
                style={{ marginLeft: 20, marginTop: 20 }}/>

            <View style={ styles.profile }>
                <View style={styles.profileHeader}>
                    {/* <Avatar image={Images.defaultProfile} size={120}/>
                     */}
                    <Acroynm
                        fontSize={25}
                        name={lastName && firstName ?`${firstName} ${lastName}`: firstName??lastName }  
                        size={65}/>
                    <Text style={styles.name}>{firstName+" "+lastName}</Text>
                    <Text style={styles.admin}>Admin</Text>
                </View>

                <View style={styles.contactStyle}>
                    <Text style={styles.contactText}>Contact Information</Text>
                    <View>
                        <Text style={styles.email}>Email</Text>
                        <Text style={styles.email_}>{email}</Text>
                    </View>
                    { contact && <View>
                        <Text style={styles.phone}>Phone no.</Text>
                        <Text style={styles.phone_}>{contact}</Text>
                    </View> }

                    <TouchableOpacity 
                        style={styles.logoutSection}
                        onPress={logoutHandler}>
                        <LogoutSvg height={15} width={15}/>
                        <Text style={styles.logOut}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
