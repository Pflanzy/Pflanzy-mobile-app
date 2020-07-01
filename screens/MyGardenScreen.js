import * as React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import BasicCard from '../components/BasicCard';
import CameraIcon from '../components/CameraIcon';

const MyGardenScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text> My Garden Screen </Text>
        <BasicCard />
        <CameraIcon />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export default MyGardenScreen;
