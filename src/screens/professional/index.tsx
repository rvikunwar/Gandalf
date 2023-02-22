import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Card from './sub-components/card'
import Searchbar from '../../components/Searchbar'

const professionals = new Array(10).fill(0)



function ProfessionalManagement() {

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
        <View style={{ paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#F5F5F5' }}>
            <Searchbar
                value={searchValue} 
                placeholderValue='Search'
                onSearchHandler={onSearchHandler}
                onClearHandler={onClearHandler}/>

            <FlatList
                data={professionals}
                renderItem={Card}
                keyExtractor={item => item}
            />


        </View>
    )
}

export default ProfessionalManagement