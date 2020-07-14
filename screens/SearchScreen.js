import * as React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import SearchField from '../components/SearchField';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const SearchScreen = () => {
  return (
        <View style={styles.wrapper}>
          <Text> Search Screen </Text>
          <SearchField/>
        </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%'
  }
})

export default SearchScreen;
