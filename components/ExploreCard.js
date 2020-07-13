import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ExploreLabel from './ExploreLabel';
import { useNavigation } from '@react-navigation/native';

function ExploreCard({ type }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('IndividualArticle')}>
      <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={require('../assets/images/water-lilly.jpg')} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.boldName}>3 reasons your houseplants die</Text>
          <Text style={styles.scientificName}>Scientific name</Text>
        </View>
        <View style={styles.passedContent}>
          <ExploreLabel type={type} style={styles.label} />
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
    width: '92%',
    shadowColor: '#404040',
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    marginVertical: 10,
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
  label: {
    marginTop: 20,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '70%',
    padding: 15,
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
