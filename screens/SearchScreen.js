import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShareIcon from '../components/share-app-component;

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Search Screen </Text>
      <ShareIcon/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchScreen;
