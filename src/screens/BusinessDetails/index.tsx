import { ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { BusinessScreenNavigationProp, BusinessScreenRouteProp } from '../../navigations/navigationTypes'
import Description from './sub-components/Description'
import ProfileHeader from './sub-components/Header'
import VerifySwitch from './sub-components/VerifySwitch'
import { useRoute } from '@react-navigation/native'
import { getUserDetails, managementSelector } from '../../store/features/userSlice'
import { UserDetailProps } from '../../store/features/storeTypes'
import { useGandalfDispatch, useGandalfSelector } from '../../hooks'
import BusinessDetailSkeleton from '../../components/DetailLoader'
import { BUSINESS_DETAIL } from '../../constant'
import styles from './style'
import { GandalfAppAPI } from '../../api'


function BusinessDetails({ navigation }: BusinessScreenNavigationProp) {

    //going back to last screen
    function goToBack(){
        navigation.goBack()
    }

    //getUserDetails
    const dispatch = useGandalfDispatch();
    const { isFetching } = useGandalfSelector(managementSelector);
    const [ userDetails, setUserDetails ] = useState<UserDetailProps|null>();

    const route = useRoute<BusinessScreenRouteProp>();

    const { userId, userRole } = route.params;

    async function getUser(){
        try{
            const user = await dispatch(getUserDetails({ userId: userId, userRole: userRole })).unwrap()
            setUserDetails(user)
            setVerified(user?.user?.isVerified??false)
        } catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        if(userId && userRole){
            getUser()
        }
    }, [userId, userRole])


    
    //for verification
    const [ verified, setVerified ] = useState(false)
    async function toggleVerificationSwitch(){
        try{
            if(verified === false){
                setVerified(true)
                await GandalfAppAPI.verifyUserStatus(userId)
            }
        } catch(e){
            console.log(e)
        }
        
    }

    return (
        <View style={styles.business}>

            <Header 
                title={BUSINESS_DETAIL}
                headerStyle={styles.headerStyle}
                textStyle={styles.textStyle}
                goToBack={goToBack}
                goToProfile={() => { navigation.navigate("Profile") }}/>      

            { 
            isFetching ? <BusinessDetailSkeleton/>:
                <ScrollView>
                    <VerifySwitch
                        verified={verified} 
                        toggleSwitch={toggleVerificationSwitch}/>
                    <ProfileHeader
                        profilePicture={userDetails?.profilePicture}
                        companyName={userDetails?.companyName} 
                        foundedin={userDetails?.foundedin}
                        contact={userDetails?.user?.contact} 
                        email={userDetails?.user?.email} 
                        />
                    {userDetails?.about && <Description
                        aboutMe={userDetails?.about}/> }
                </ScrollView> 
            } 
        </View>
    )
}

export default BusinessDetails