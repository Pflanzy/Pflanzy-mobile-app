import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExploreLabelComponent from '../components/ExploreLabelComponent';

const ReminderScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Explore Screen </Text>
      <ExploreLabelComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ReminderScreen;
