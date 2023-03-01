import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import Tag from '../../../../components/Tag/index';
import { formattingTimestamp } from '../../../../utils';
import Acroynm from '../../../../components/Acroynm';

interface CardProps {
    lastName: string|null;
    firstName: string|null;
    isVerified: boolean;
    isActive: boolean;
    email: string | null;
    contact: string | number | null;
    createdAt: string,
    goToDetailScreen: () => void;
}

function Card({ firstName, lastName, isVerified, isActive, email, contact, createdAt, goToDetailScreen }: CardProps){

    //for setting tags color
    const [ color, setColor ] = useState({
        'verified': "#CD3504",
        'active': "#CD3504"
    })

    useEffect(()=>{
        switch(isVerified){
            case true:
                setColor((e) => {
                    e['verified'] = "#09AFCD";
                    return {...e }
                })
                break;
            default:
                setColor((e) => {
                    e['verified'] = "#CD3504";
                    return {...e }
                })
        }
    },[isVerified])
    
    return (
        <Pressable 
            onPress={goToDetailScreen} 
            style={[ styles.card, styles.shadowProp ] }>
            <Acroynm 
                name={lastName && firstName ?`${firstName} ${lastName}`: firstName??lastName??"" } 
                size={45}/>
            <View style={styles.main}>
                <View style={styles.header}>
                    <View style={styles.desc}>
                        <Text style={styles.name}>{firstName}{' '}{lastName}</Text>
                        {/* <Text style={styles.position}>Project Manager</Text> */}
                    </View>
                    <View>
                        <Tag 
                            color={color['verified']} 
                            text={isVerified?"Verified":"Not verified"} 
                            style={{ marginRight: 10, marginBottom: 5 }}/>
                        {/* <Tag text="Available"/> */}
                    </View>
                </View>
                <View style={styles.footer}>
                    {email && <Text style={styles.email}>{email}</Text> }
                    { createdAt && <Text style={styles.timestamp}>{formattingTimestamp(createdAt)}</Text> }
                </View>
            </View>
        </Pressable>
    )
}

export default Card;