import React from 'react';
import { StyleSheet } from 'react-native';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import exploreData from '../data/browse.json';
import ExploreCard from '../components/ExploreCard';

const ExploreScreen = () => {
  const renderItem = ({ item }) => {
    return <ExploreCard article={item} />;
  };
  return (
    <OptimizedFlatList
      data={exploreData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.wrapper}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
  },
});

export default ExploreScreen;
