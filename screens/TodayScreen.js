import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import ReminderCard from '../components/Reminder-card-component';
=======
import ReminderCard from '../components/ReminderCard';
>>>>>>> master

const TodayScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Today Screen </Text>
      <ReminderCard />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodayScreen;
