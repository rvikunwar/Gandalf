import { View, Text } from 'react-native'
import React from 'react'
import styles from './style';
import { Images } from '../../../../assets';
import Avatar from '../../../../components/Avatar';
import Tag from '../../../../components/Tag/index';


function Card(){
    return (
        <View style={[ styles.card, styles.shadowProp ] }>
            <Avatar image={Images.defaultProfile}/>
            <View>
                <View style={styles.header}>
                    <View style={styles.desc}>
                        <Text style={styles.name}>Robert Fox</Text>
                        <Text style={styles.position}>Project Manager</Text>
                    </View>
                    <View>
                        <Tag text="Verified" style={{ marginRight: 10, marginBottom: 5 }}/>
                        <Tag text="Available"/>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.email}>roberfox@gmail.com</Text>
                    <Text style={styles.timestamp}>11, Sept 2022</Text>
                </View>
            </View>

        </View>
    )
}

export default Card;