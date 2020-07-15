import React, { useState } from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Colors from '../constants/Colors'

const SearchField = props => {
    const [searchValue, setSearchValue] = useState('')

    const updateSearch = (searchValue) => {
        setSearchValue(searchValue)
    }

    return (
        <View style={styles.wrapper}>
            <SearchBar
                inputStyle={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 10}}
                inputContainerStyle={{backgroundColor: Colors.tintColor , borderRadius: 32, height: 65}}
                containerStyle={{backgroundColor: 'none', width: '90%', borderTopWidth: 0, borderBottomWidth: 0, margin: 10}}
                cancelButtonTitle={{paddingHorizontal: 10}}
                searchIcon={{paddingLeft: 10, size: 24, paddingRight: 0, color: Colors.defaultWhite}}
                clearIcon={{color: Colors.defaultWhite, size: 24, paddingHorizontal: 10}}
                rightIconContainerStyle={{paddingLeft: 5}}

                placeholder="Enter plant name"
                onChangeText={updateSearch}
                value={searchValue}
                onClear={() => Keyboard.dismiss()}
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