import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ExploreLabel from './ExploreLabel';

function ExploreCard({ type }) {
  const pressHandler = () => {
    console.log('Navigate to explore more');
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={pressHandler}>
      <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={require('../assets/images/water-lilly.jpg')} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.boldName}>3 reasons your houseplants die</Text>
          <Text style={styles.scientificName}>Scientific name</Text>
        </View>
        <View style={styles.passedContent}>
          <ExploreLabel type={type} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row-reverse',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 130,
    width: '90%',
    elevation: 3,
    shadowColor: '#404040',
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 2,
    marginVertical: 6,
  },
  imageContainer: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: '30%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  detailsContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    width: '70%',
    padding: 5,
  },

  nameContainer: {
    paddingTop: 5,
  },

  boldName: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  passedContent: {},
});

export default ExploreCard;
