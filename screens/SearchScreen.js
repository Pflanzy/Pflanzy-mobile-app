import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IndividualArticle from '../components/IndividualArticle'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Search Screen </Text>
      <IndividualArticle/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchScreen;
