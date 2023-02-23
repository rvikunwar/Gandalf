import { View, FlatList } from 'react-native'
import React, { useState } from 'react'
import Card from './sub-components/card'
import Searchbar from '../../components/Searchbar'
import Header from '../../components/Header'


const business = new Array(10).fill(0)


function BusinessManagement() {

    //for filtering and searching values
    const [ searchValue, setSearchValue ] = useState("")
    function onSearchHandler(val: string) {
        setSearchValue(val);
    }

    //for clearing text on searchbar
    function onClearHandler(){
        setSearchValue("");
    }

    return (
        <View style={{ backgroundColor: "#F1F3F6", paddingBottom: 70 }}>

            <Header 
                title="Business Management"
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
                goToProfile={() => {}}/>

            <FlatList
                data={business}
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
                    <View style={{ paddingHorizontal: 20 }}>
                        <Card/>
                    </View>)}
                keyExtractor={item => item}
            />

        </View>
    )
}

export default BusinessManagement