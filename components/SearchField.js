import React, { useState } from 'react';
import {View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


const SearchField = props => {
    const [searchValue, setSearchValue] = useState('')

    const updateSearch = () => {
        setSearchValue(searchValue)
    }
    
    return (
        <View style={styles.wrapper}>
            <SearchBar
                inputStyle={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 10}}
                inputContainerStyle={{backgroundColor: '#004e57', borderRadius: 30, height: 60}}
                containerStyle={{backgroundColor: 'none', width: '90%', borderTopWidth: 0, borderBottomWidth: 0}}
                cancelButtonTitle={{paddingHorizontal: 10}}
                searchIcon={{paddingLeft: 10, size: 24}}
                rightIconContainerStyle={{paddingLeft: 5}}
                placeholder="Enter plant name"
                onChangeText={updateSearch}
                value={searchValue}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
        
    }
})

export default SearchField;