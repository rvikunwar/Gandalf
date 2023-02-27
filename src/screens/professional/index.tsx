import { View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './sub-components/card'
import Searchbar from '../../components/Searchbar'
import Header from '../../components/Header'
import { ProfessionalScreenNavigationProp } from '../../navigations/navigationTypes'
import { useGandalfDispatch, useGandalfSelector } from '../../hooks'
import { getAllManagements, managementSelector } from '../../store/features/userSlice'
import { userProps } from '../../store/features/storeTypes'
import Loader from '../../components/Loader'


function ProfessionalManagement({  navigation }: ProfessionalScreenNavigationProp) {

    //for filtering and searching values
    const [ searchValue, setSearchValue ] = useState("")
    function onSearchHandler(val: string) {
        setSearchValue(val);
    }
    //filters the data whenever searchValue changes
    useEffect(() => {
        if (searchValue === "") {
            setProfessionals(professionals)
        } else {
            let filteredProfessionals = professionals.filter((s) => {
                let name = s.firstName + " " + s.lastName;
                return name.toLowerCase().includes(searchValue.toLowerCase());
            });
            setProfessionals(filteredProfessionals);
        }
    }, [searchValue]);

    //for clearing text on searchbar
    function onClearHandler(){
        setSearchValue("");
    }

    //for navigating to details screen
    function goToDetailScreen(){
        navigation.navigate("ProfessionalDetail")
    } 

    //dispatch
    const dispatch = useGandalfDispatch();
    //fetching management user details - professional/ business
    useEffect(()=>{
        dispatch(getAllManagements({}))
    },[])

    //selector
    const { professionals } = useGandalfSelector(managementSelector) 
    const [ professionalArray, setProfessionals ] = useState<userProps[]>([])
    useEffect(()=>{
        //filtering only professionals
        setProfessionals(professionals)
    },[professionals])


    //for refreshing list of professionals
    const [ refreshing, setRefreshing ] = useState(false)
    async function onRefresh(){
        setRefreshing(true)
        await dispatch(getAllManagements({}))
        setRefreshing(false)
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

            {
                professionalArray.length === 0 ?
                <Loader/>:
            
                <FlatList
                    data={professionalArray}
                    onRefresh={onRefresh}
                    refreshing={refreshing}
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
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={goToDetailScreen} style={{ paddingHorizontal: 20 }}>
                            <Card
                                firstName={item.firstName}
                                lastName={item.lastName}
                                isVerified={item.isVerified}
                                isActive={item.isActive}
                                email={item.email}
                                contact={item.contact}
                                createdAt={item.createdAt}/>
                        </TouchableOpacity>)}
                    keyExtractor={item => `${item.id}`}
                />
            }

        </View>
    )
}

export default ProfessionalManagement