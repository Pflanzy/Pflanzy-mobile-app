import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';

function BasicCard({ plant }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate('MyPlant', {
          plantId: plant.id,
        })
      }>
      <View style={styles.imageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: plant?.custom?.picture ? plant.custom.picture : plant?.images?.imagePrimary,
          }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          {plant?.custom?.title ? <Text style={styles.boldName}>{plant.custom.title} </Text> : null}
          <Text style={styles.boldName}>{plant.commonName} </Text>
          <Text style={styles.scientificName}>{plant.scientificName} </Text>
        </View>
        <View style={styles.passedContent} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.defaultWhite,
    borderRadius: 10,
    height: 100,
    width: '92%',
    elevation: 3,
    shadowColor: Colors.basicShadows,
    shadowOpacity: 0.4,
    shadowOffset: { height: 2 },
    shadowRadius: 3,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    fontWeight: '400',
    fontSize: 18,
  },

  scientificName: {
    fontWeight: '200',
    fontSize: 14,
  },
});

export default BasicCard;
