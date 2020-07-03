import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExploreLabel from '../components/ExploreLabel';

const ReminderScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Explore Screen </Text>
      <ExploreLabel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ReminderScreen;
