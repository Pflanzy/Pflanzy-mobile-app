import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlantLink from '../components/plant-link-component'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Search Screen </Text>
      <PlantLink/>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
