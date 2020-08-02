import React from 'react';
import ExploreCard from '../components/ExploreCard';
import exploreData from '../data/browse.json';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

const ExploreScreen = () => {
  const renderItem = ({ item }) => {
    return <ExploreCard article={item} />;
  };
  return (
      <OptimizedFlatList
        data={exploreData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
  );
};
export default ExploreScreen;
