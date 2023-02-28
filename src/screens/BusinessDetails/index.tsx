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
import Loader from '../../components/Loader'


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
        const user = await dispatch(getUserDetails({ userId: userId, userRole: userRole })).unwrap()
        setUserDetails(user)
    }

    useEffect(()=>{
        if(userId && userRole){
            getUser()
        }
    }, [userId, userRole])

    return (
        <View style={{ backgroundColor: "white", flex: 1, paddingBottom: 70 }}>

            <Header 
                title="Business Details"
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

            
            { isFetching ? <Loader/>:
                <ScrollView>
                    <VerifySwitch/>
                    <ProfileHeader
                        profilePicture={userDetails?.profilePicture}
                        companyName={userDetails?.companyName} 
                        foundedin={userDetails?.foundedin}
                        contact={userDetails?.user?.contact} 
                        email={userDetails?.user?.email} 
                        />
                    {userDetails?.about && <Description
                        aboutMe={userDetails?.about}/> }
                </ScrollView>}
        </View>
    )
}

export default BusinessDetails