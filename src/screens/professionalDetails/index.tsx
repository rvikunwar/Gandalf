import { ScrollView, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import ProfileHeader from  "./sub-components/Header"
import Description from './sub-components/Description'
import Skills from './sub-components/Skills'
import Summary from './sub-components/Summary'
import JobApplication from './sub-components/JobsApplication'
import { ProfessionalScreenNavigationProp } from '../../navigations/navigationTypes'
import VerifySwitch from './sub-components/VerifySwitch'


function ProfessionalDetails({ navigation }: ProfessionalScreenNavigationProp) {


    //going back to last screen
    function goToBack(){
        navigation.goBack()
    }


    return (
        <View style={{ backgroundColor: "white", paddingBottom: 70 }}>

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
            <ScrollView>
                <VerifySwitch/>
                <ProfileHeader/>
                <Description/>
                <Skills/>
                <Summary/>
                <JobApplication/>
            </ScrollView>

        </View>
    )
}

export default ProfessionalDetails