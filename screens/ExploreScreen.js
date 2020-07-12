import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExploreCard from '../components/ExploreCard';

const ReminderScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Explore Screen </Text>
      <ExploreCard type="tips" />
      <ExploreCard type="collection" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ReminderScreen;
