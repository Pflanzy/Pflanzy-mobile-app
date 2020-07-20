import * as React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import BasicCard from '../components/BasicCard';

const MyGardenScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text> My Garden Screen </Text>
        <BasicCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default MyGardenScreen;
