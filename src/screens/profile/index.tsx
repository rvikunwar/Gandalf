import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Avatar from '../../components/Avatar'
import { Images, LogoutSvg } from '../../assets'
import styles from './style'
import BackButton from '../../components/BackButton'
import { StackNavProps } from '../../navigations/navigationTypes'


export default function Profile({  navigation }: StackNavProps<"Profile"> ) {
    return (
        <View style={[{ backgroundColor: "white", flex: 1, }]}>
            
            <BackButton 
                goToBack={()=> { navigation.goBack() }} 
                style={{ marginLeft: 20, marginTop: 20 }}/>

            <View style={ styles.profile }>
                <View style={styles.profileHeader}>
                    <Avatar image={Images.defaultProfile} size={120}/>
                    <Text style={styles.name}>Uran Podland</Text>
                    <Text style={styles.admin}>Admin</Text>
                </View>

                <View style={styles.contactStyle}>
                    <Text style={styles.contactText}>Contact Information</Text>
                    <View>
                        <Text style={styles.email}>Email</Text>
                        <Text style={styles.email_}>uranpoland@gmail.com</Text>
                    </View>
                    <View>
                        <Text style={styles.phone}>Phone no.</Text>
                        <Text style={styles.phone_}>+1 12345 67898</Text>
                    </View>

                    <TouchableOpacity style={styles.logoutSection}>
                        <LogoutSvg height={15} width={15}/>
                        <Text style={styles.logOut}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
