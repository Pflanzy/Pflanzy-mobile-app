import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BasicCard(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('IndividualPlantPage')}>
      <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={require('../assets/images/water-lilly.jpg')} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.boldName}>Water Lilly</Text>
          <Text style={styles.scientificName}>Scientific name</Text>
        </View>
        <View style={styles.passedContent}>
          <Text>passed prop</Text>
        </View>
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
    width: '92%',
    elevation: 3,
    shadowColor: '#404040',
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    marginVertical: 10,
  },
  imageContainer: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: '30%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    padding: 10,
  },

  nameContainer: {
    justifyContent: 'center',
  },

  boldName: {
    fontWeight: 'bold',
    fontSize: 20,
  },

});

export default BasicCard;
