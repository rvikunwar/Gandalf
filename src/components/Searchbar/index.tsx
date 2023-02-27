import { View, ViewStyle, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { CloseSvg, SearchSvg } from '../../assets';


interface SearchbarProps {
    value: string;
    placeholderValue: string;
    style?: ViewStyle;
    onSearchHandler?: (val: string) => void;
    onClearHandler: () => void
}

export default function Searchbar({ style, 
    value, 
    placeholderValue, 
    onSearchHandler,
    onClearHandler }: SearchbarProps) {
    
    //for clearing text on inout field
    function onClearSearchbar(){
        value.length>0 && onClearHandler();
    }
    
    return (
        <View style={[ styles.inputBox, styles.shadow, style ]}>
            <TextInput
                style={styles.input}
                onChangeText={onSearchHandler}
                value={value}
                placeholder={placeholderValue}
            />
            <TouchableOpacity onPress={onClearSearchbar}>
                { value.length == 0 ? 
                    <SearchSvg height={24} width={24}/>:
                    <CloseSvg height={24} width={24}/>
                } 
            </TouchableOpacity>
        </View>
    )
}