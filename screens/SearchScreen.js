import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyTask from '../components/DailyTask';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Search Screen </Text>
      <DailyTask/>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
