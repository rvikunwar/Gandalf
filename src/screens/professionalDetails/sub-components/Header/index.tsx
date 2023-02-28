import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Avatar from '../../../../components/Avatar'
import Acroynm from '../../../../components/Acroynm'

interface HeaderProps{
    profilePicture: string|undefined|null;
    firstName: string|null|undefined;
    lastName: string|null|undefined;
    email: string|null|undefined;
    contact: string|null|undefined;
    currentRole: string|null|undefined;
}


export default function Header({ 
    profilePicture, 
    firstName, lastName, contact, email, currentRole }: HeaderProps) {

    return (
        <View style={styles.header}>
            { profilePicture ?  <Avatar image={profilePicture} size={70}/>:
                <Acroynm
                    name={lastName && firstName ?
                        `${firstName} ${lastName}`: firstName??lastName??"U" }  
                    size={55}/>}
                    
            <View style={styles.details}>
                {lastName && firstName ?
                    <Text style={styles.name}>{firstName+" "+lastName}</Text>: 
                    <Text style={styles.name}>{firstName??lastName}</Text> } 
                {currentRole?.trim() ? <Text style={styles.position}>{currentRole}</Text>: null}
                <View style={styles.row}>
                    { email &&<Text style={styles.email}>{email}</Text> }
                    { contact && <Text style={styles.phone}>{contact}</Text> }
                </View>

            </View>

        </View>
    )
}