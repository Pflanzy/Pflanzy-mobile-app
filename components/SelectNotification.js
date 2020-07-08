import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SelectNotification() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text>Sunlight</Text>
        <Text>Water</Text>
        <Text>Fertilize</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    height: '50%',
  },
});

export default SelectNotification;
