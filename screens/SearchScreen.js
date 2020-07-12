import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Select from '../components/SelectNotification';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Search Screen </Text>
      <Select />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchScreen;
