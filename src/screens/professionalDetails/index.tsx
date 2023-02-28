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
import { getUserDetails, jobApplicationOfUser, managementSelector } from '../../store/features/userSlice'
import { UserDetailProps } from '../../store/features/storeTypes'
import { useRoute } from '@react-navigation/native'
import Loader from '../../components/Loader'
import { GandalfAppAPI } from 'api'


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
        const user = await dispatch(getUserDetails({ userId: userId, userRole: userRole })).unwrap()
        setUserDetails(user)
    }

    useEffect(()=>{
        if(userId && userRole){
            getUser()
        }
    }, [userId, userRole])


    //for verification
    function toggleVerificationSwitch(){
    }



    return (
        <View style={{ position: 'relative', backgroundColor: "white", paddingBottom: 70, flex: 1 }}>

            <Header 
                title="Professional Details"
                headerStyle={{
                    width: "100%",
                    paddingHorizontal: 20
                }}
                textStyle={{
                    flex: 0.6,
                    fontSize: 17,
                    fontWeight: "500"
                }}
                goToBack={goToBack}
                goToProfile={() => { navigation.navigate("Profile") }}/>    
            
            {isFetching ? 
                <Loader/>:
                <ScrollView>
                    <VerifySwitch 
                        verified={userDetails?.user?.isVerified??false} 
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
                    <Skills
                        skills={userDetails?.skill??[]}/>
                    <Summary
                        availability={userDetails?.availability}
                        hourlyRate={userDetails?.hourlyRate}
                        experience={userDetails?.workExperience}
                        qualification={userDetails?.qualification??[]}/>
                    <JobApplication userId={userId}/>
                </ScrollView>}

        </View>
    )
}

export default ProfessionalDetails