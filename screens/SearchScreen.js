import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BasicCard from '../components/BasicCard';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Search Screen </Text>
      <BasicCard />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
