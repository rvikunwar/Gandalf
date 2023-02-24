import { View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Card from './sub-components/card'
import Searchbar from '../../components/Searchbar'
import Header from '../../components/Header'
import { ProfessionalScreenNavigationProp } from '../../navigations/navigationTypes'


const professionals = new Array(10).fill(0)


function ProfessionalManagement({  navigation }: ProfessionalScreenNavigationProp) {

    //for filtering and searching values
    const [ searchValue, setSearchValue ] = useState("")
    function onSearchHandler(val: string) {
        setSearchValue(val);
    }

    //for clearing text on searchbar
    function onClearHandler(){
        setSearchValue("");
    }

    //for navigating to details screen
    function goToDetailScreen(){
        navigation.navigate("ProfessionalDetail")
    } 

    return (
        <View style={{ backgroundColor: "#F1F3F6", paddingBottom: 70 }}>

            <Header 
                title="Professional Management"
                logo={true}
                headerStyle={{
                    width: "100%",
                    paddingHorizontal: 20
                }}
                textStyle={{
                    flex: 0.6,
                    fontSize: 17,
                    fontWeight: "500"
                }}
                goToProfile={() => { 
                    navigation.navigate("Profile")
                }}/>

            <FlatList
                data={professionals}
                ListHeaderComponent={
                    <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                        <Searchbar
                            style={{ marginTop: 15 }}
                            value={searchValue} 
                            placeholderValue='Search'
                            onSearchHandler={onSearchHandler}
                            onClearHandler={onClearHandler}/>
                    </View>

                }
                renderItem={() => (
                    <TouchableOpacity
                        onPress={goToDetailScreen} style={{ paddingHorizontal: 20 }}>
                        <Card/>
                    </TouchableOpacity>)}
                keyExtractor={item => item}
            />

        </View>
    )
}

export default ProfessionalManagement