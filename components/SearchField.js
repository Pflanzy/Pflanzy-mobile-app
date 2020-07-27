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
        round
        inputStyle={{
          backgroundColor: 'white',
          borderRadius: 12,
          paddingHorizontal: 10,
        }}
        inputContainerStyle={{ backgroundColor: '#8FAE93' }}
        searchIcon={{ backgroundColor: 'transparent' }}
        containerStyle={{
          backgroundColor: 'transparent',
          borderStyle: 'dashed',
          marginTop: 20,
        }}
        cancelButtonTitle={{ paddingHorizontal: 10 }}
        clearIcon={{
          color: Colors.defaultWhite,
          size: 24,
          paddingHorizontal: 10,
        }}
        rightIconContainerStyle={{ paddingLeft: 5 }}
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
    width: '100%',
  },
});

export default SearchField;
