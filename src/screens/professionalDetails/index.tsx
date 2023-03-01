import { ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProfileHeader from  "./sub-components/Header"
import Description from './sub-components/Description'
import Skills from './sub-components/Skills'
import Summary from './sub-components/Summary'
import JobApplication from './sub-components/JobsApplication'
import { ProfessionalScreenNavigationProp, ProfessionalScreenRouteProp } from '../../navigations/navigationTypes'
import VerifySwitch from './sub-components/VerifySwitch'
import { useGandalfDispatch, useGandalfSelector } from '../../hooks'
import { getUserDetails, managementSelector } from '../../store/features/userSlice'
import { UserDetailProps } from '../../store/features/storeTypes'
import { useRoute } from '@react-navigation/native'
import ProfessionalDetailSkeleton from '../../components/DetailLoader'
import { GandalfAppAPI } from '../../api'
import { PROFESSIONAL_DETAIL } from '../../constant'
import styles from './style'
import Loader from '../../components/Loader'


function ProfessionalDetails({ navigation }: 
    ProfessionalScreenNavigationProp) {

    //going back to last screen
    function goToBack(){
        navigation.goBack()
    }

    //getUserDetails
    const dispatch = useGandalfDispatch();
    const { isFetching } = useGandalfSelector(managementSelector);
    const [ userDetails, setUserDetails ] = useState<UserDetailProps|null>();

    const route = useRoute<ProfessionalScreenRouteProp>();

    const { userId, userRole } = route.params;

    async function getUser(){
        try {
            const user = await dispatch(getUserDetails({ 
                userId: userId, userRole: userRole })).unwrap()
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

    //FOR LOADING
    const [ loader, setLoader ] =  useState(false)

    return (
        <View style={{ position: 'relative', backgroundColor: "white", paddingBottom: 70, flex: 1 }}>

            
            <Header 
                title={PROFESSIONAL_DETAIL}
                headerStyle={styles.headerStyle}
                textStyle={styles.textStyle}
                goToBack={goToBack}
                goToProfile={() => { navigation.navigate("Profile") }}/>    
            
            { loader && <Loader/> }
            {isFetching ? 
                <ProfessionalDetailSkeleton/>:
                <ScrollView>
                    <VerifySwitch 
                        verified={verified} 
                        toggleSwitch={toggleVerificationSwitch}/>
                    <ProfileHeader
                        profilePicture={userDetails?.profilePicture}
                        firstName={userDetails?.user?.firstName} 
                        lastName={userDetails?.user?.lastName} 
                        contact={userDetails?.user?.contact} 
                        email={userDetails?.user?.email} 
                        currentRole={userDetails?.currentRole}
                        />
                    <Description
                        aboutMe={userDetails?.aboutMe}/>
                    { userDetails?.skill && userDetails?.skill.length>0 &&
                        <Skills
                            skills={userDetails?.skill??[]}/>}
                    <Summary
                        availability={userDetails?.availability}
                        hourlyRate={userDetails?.hourlyRate}
                        experience={userDetails?.workExperience}
                        qualification={userDetails?.qualification??[]}/>
                    <JobApplication 
                        userId={userId} 
                        setLoader={setLoader}
                        loader={loader}/>
                </ScrollView>}

        </View>
    )
}

export default ProfessionalDetails