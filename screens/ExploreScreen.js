import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import ExploreCard from '../components/ExploreCard';
import exploreData from '../data/browse.json';
import background from '../assets/images/plant-background-2.jpg';

const ExploreScreen = () => {
  const renderItem = ({ item }) => {
    return <ExploreCard article={item} />;
  };
  return (
    <>
      <ImageBackground source={background} style={styles.background} />
      <OptimizedFlatList
        data={exploreData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatList}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingVertical: 10,
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 0,
    opacity: 0.9,
  },
});

export default ExploreScreen;
