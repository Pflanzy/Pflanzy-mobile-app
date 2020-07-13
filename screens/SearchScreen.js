import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IndividualArticle from '../components/IndividualArticle'
import SearchField from '../components/SearchField';

const SearchScreen = () => {
  return (
    <View>
      <Text> Search Screen </Text>
      <SearchField/>
    </View>
  );
};



export default SearchScreen;
