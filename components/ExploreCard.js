import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExploreLabel from './ExploreLabel';
import Colors from '../constants/Colors';

function ExploreCard({ article }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.cardContainer}
      onPress={() => navigation.navigate('IndividualArticle', { article })}>
      <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={{ uri: article.images.imagePrimary }} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.headline}>{article.headline}</Text>
        </View>
        <View style={styles.passedContent}>
          <ExploreLabel label={article.label} style={styles.label} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row-reverse',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 130,
    width: '93%',
    elevation: 3,
    shadowColor: Colors.basicShadows,
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  imageContainer: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: '33%',
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
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '67%',
    padding: 15,
  },
  nameContainer: {
    paddingTop: 5,
  },
  headline: {
    fontWeight: '300',
    fontSize: 18,
  },
});

export default ExploreCard;
