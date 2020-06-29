import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraIcon from '../components/CameraIcon';

const MyGardenScreen = () => {
  return (
    <View style={styles.container}>
      <Text> My Garden Screen </Text>
      <CameraIcon />
    </View>
  );
};

export default MyGardenScreen;

const styles = StyleSheet.create({});
