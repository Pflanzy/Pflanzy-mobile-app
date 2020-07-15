import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function SelectNotification() {
  const sun = () => {
    console.log('Your plant needs sunlight');
  };
  const water = () => {
    console.log('Water your plant');
  };
  const fertilize = () => {
    console.log('Change fertilizer');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.plantName}>Plant name</Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.notificationImage}
          source={require('../assets/images/water-lilly.jpg')}
        />
      </View>
      <View style={styles.selectorContainer}>
        <TouchableOpacity style={styles.notificationBtn} onPress={sun}>
          <Text style={styles.btnText}>Sunlight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationBtn} onPress={water}>
          <Text style={styles.btnText}>Water</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationBtn} onPress={fertilize}>
          <Text style={styles.btnText}>Fertilizer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '50%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#404040',
    shadowOpacity: 0.3,
    shadowOffset: { height: 3 },
    shadowRadius: 2,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  plantName: {
    fontWeight: 'bold',
    fontSize: 20,
    height: '10%',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notificationImage: {
    height: '100%',
    width: '50%',
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '30%',
  },

  notificationBtn: {
    backgroundColor: '#004e57',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SelectNotification;
