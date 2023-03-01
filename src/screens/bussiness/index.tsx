import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './sub-components/card'
import Searchbar from '../../components/Searchbar'
import Header from '../../components/Header'
import { BusinessScreenNavigationProp } from '../../navigations/navigationTypes'
import { useGandalfDispatch, useGandalfSelector } from '../../hooks'
import { getAllManagements, managementSelector } from '../../store/features/userSlice'
import { userProps } from '../../store/features/storeTypes'
import SkeletonThread from '../../components/SkeletonLoader'
import styles from './style'
import { BUSINESS_TITLE, SEARCH_PLACEHOLDER } from '../../constant'


//Loading skeleton
const loaderArray = new Array(10).fill(0).map((_, index) => index);

function BusinessManagement({  navigation }: BusinessScreenNavigationProp) {

    //for filtering and searching values
    const [ searchValue, setSearchValue ] = useState("")
    function onSearchHandler(val: string) {
        setSearchValue(val);
    }

    //filters the data whenever searchValue changes
    useEffect(() => {
        if (searchValue === "") {
            setBusinessArray(business)
        } else {
            let filteredBusiness = business.filter((s) => {
                let name = s.firstName + " " + s.lastName;
                return name.toLowerCase().includes(searchValue.toLowerCase());
            });
            setBusinessArray(filteredBusiness);
        }
    }, [searchValue]);

    //for clearing text on searchbar
    function onClearHandler(){
        setSearchValue("");
    }

    //for navigating to details screen
    function goToDetailScreen(id: number){
        navigation.navigate("BusinessDetail", {
            userId:id, userRole: 2
        })
    } 

    //dispatch
    const dispatch = useGandalfDispatch();
    //fetching management user details - professional/ business

    useEffect(()=>{
        getBusiness()
    },[])

    //selector
    const { isFetching } = useGandalfSelector(managementSelector)
    const [ business, setBusiness ] = useState<userProps[]>([])
    const [ businessArray, setBusinessArray ] = useState<userProps[]>([])
    async function getBusiness(){
        const { business } = await dispatch(getAllManagements({})).unwrap()
        setBusinessArray(business)
        setBusiness(business)
    }

    useEffect(()=>{
        dispatch(getAllManagements({}))
    },[])


    //for refreshing list of professionals
    const [ refreshing, setRefreshing ] = useState(false)
    async function onRefresh(){
        setRefreshing(true)
        await getBusiness();
        setRefreshing(false)
    }

    return (
        <View style={styles.business}>

            <Header 
                title={BUSINESS_TITLE}
                logo={true}
                headerStyle={styles.headerStyle}
                textStyle={styles.textStyle}
                goToProfile={() => { 
                    navigation.navigate("Profile")
                }}/>
            {
                isFetching || refreshing ?
                <FlatList
                    data={loaderArray}
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    ListHeaderComponent={
                        <Searchbar
                            style={styles.searchbar}
                            value={searchValue} 
                            placeholderValue={SEARCH_PLACEHOLDER}
                            onSearchHandler={onSearchHandler}
                            onClearHandler={onClearHandler}/>

                    }
                    renderItem={() => (<SkeletonThread/>)}
                    keyExtractor={item => `${item}`}
                />:
            
                <FlatList
                    data={businessArray}
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    ListHeaderComponent={
                        <Searchbar
                            style={styles.searchbar}
                            value={searchValue} 
                            placeholderValue={SEARCH_PLACEHOLDER}
                            onSearchHandler={onSearchHandler}
                            onClearHandler={onClearHandler}/>
                    }
                    renderItem={({ item }) => (
                            <Card
                                goToDetailScreen={() => goToDetailScreen(item.id)}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                isVerified={item.isVerified}
                                isActive={item.isActive}
                                email={item.email}
                                contact={item.contact}
                                createdAt={item.createdAt}/>)}
                    keyExtractor={item => `${item.id}`}
                />
            }

        </View>
    )
}

export default BusinessManagement