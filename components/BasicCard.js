import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function BasicCard() {
  return (
    <View style={styles.cardContainer}>
      <Image source={require('../assets/images/robot-dev.png')} />
      <View>
        <Text>Rose</Text>
        <Text>Scientific name</Text>
      </View>
      <View>
        <Text>passed prop</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});

export default BasicCard;
