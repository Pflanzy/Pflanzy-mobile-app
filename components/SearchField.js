import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Colors from '../constants/Colors';

const SearchField = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const updateSearch = (query) => {
    setSearchValue(query);
  };
  useEffect(() => {
    props.sendData(searchValue);
  }, [searchValue]);
  return (
    <View style={styles.wrapper}>
      <SearchBar
       inputStyle={{backgroundColor: 'white', borderRadius: 12, paddingHorizontal: 10, }}
       inputContainerStyle={{backgroundColor: Colors.tintColor , borderTopLeftRadius: 19, borderBottomLeftRadius: 19, height: 65}}
       containerStyle={{backgroundColor: 'none', width: '98%', borderTopWidth: 0, borderBottomWidth: 0,paddingBottom:0}}
       cancelButtonTitle={{paddingHorizontal: 10}}
       searchIcon={{paddingLeft: 10, size: 24, paddingRight: 0, color: Colors.defaultWhite}}
       clearIcon={{color: Colors.defaultWhite, size: 24, paddingHorizontal: 10}}
       rightIconContainerStyle={{paddingLeft: 5}}
       placeholder="Enter plant name"
        placeholder="Enter plant name"
        onChangeText={updateSearch}
        value={searchValue}
        onClear={() => Keyboard.dismiss()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '103%',
    alignItems:"flex-end",
  },
});

export default SearchField;
