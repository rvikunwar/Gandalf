import { ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { ProfStackNavProps } from '../../navigations/navigationTypes'
import ProfileHeader from  "./sub-components/Header"
import Description from './sub-components/Description'
import Skills from './sub-components/Skills'
import Summary from './sub-components/Summary'
import JobApplication from './sub-components/JobsApplication'


function ProfessionalDetails() {


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
                goToBack={() => {}}
                goToProfile={() => {  }}/>      
            <ScrollView>
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