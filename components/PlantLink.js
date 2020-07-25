import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

const PlantLink = (props) => {
  return (
    <Link to="/individual-plant-page-path">
      <View style={styles.wrapper}>
        <Image style={styles.image} source={{ uri: 'https://picsum.photos/seed/picsum/200/200' }} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 15,
  },
});

export default PlantLink;
