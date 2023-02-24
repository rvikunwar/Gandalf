import { ScrollView, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { BusinessScreenNavigationProp } from '../../navigations/navigationTypes'
import Description from './sub-components/Description'
import ProfileHeader from './sub-components/Header'
import VerifySwitch from './sub-components/VerifySwitch'


function BusinessDetails({ navigation }: BusinessScreenNavigationProp) {

    //going back to last screen
    function goToBack(){
        navigation.goBack()
    }

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
            <ScrollView>
                <VerifySwitch/>
                <ProfileHeader/>
                <Description/>
            </ScrollView>
        </View>
    )
}

export default BusinessDetails