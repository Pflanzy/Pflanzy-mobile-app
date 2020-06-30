import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReminderCard from '../components/reminder-card-component'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Search Screen </Text>
      <ReminderCard/>
      <ReminderCard/>
      <ReminderCard/>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
