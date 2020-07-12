import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

function SelectNotification() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.notificationImage}
          source={require('../assets/images/water-lilly.jpg')}
        />
      </View>
      <View style={styles.selectorContainer}>
        <ScrollView horizontal>
          <Text>Sunlight</Text>
          <Text>Water</Text>
          <Text>Fertilize</Text>
        </ScrollView>
      </View>
      <svg height="500" width="500">
        <polygon points="50,20 30,80 40,60" stroke="cadetblue" strokeWidth="5" />
      </svg>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    height: '60%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notificationImage: {
    height: '100%',
    width: '50%',
  },
  selectorContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    width: '60%',
    height: '30%',
    borderWidth: 1,
  },
});

export default SelectNotification;
