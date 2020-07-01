import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function BasicCard(props) {
  const pressHandler = () => {
    console.log('Navigate to plant card');
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={pressHandler}>
      <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={require('../assets/images/water-lilly.jpg')} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.boldName}>Water Lilly</Text>
        <Text style={styles.scientificName}>Scientific name</Text>
      </View>
      <View style={styles.passedContent}>
        <Text>passed prop</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 100,
    width: '90%',
    elevation: 3,
    shadowColor: '#404040',
    shadowOpacity: 0.4,
    shadowOffset: { width: 3, height: 4 },
    shadowRadius: 2,
    marginVertical: 6,
  },
  imageContainer: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: '30%',
    backgroundColor: '#808000',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  nameContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },

  boldName: {
    fontWeight: 'bold',
    fontSize: 22,
  },

  passedContent: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default BasicCard;
