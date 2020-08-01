import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ExploreCard from '../components/ExploreCard';
import exploreData from '../data/browse.json';

const ExploreScreen = () => {
  const articleList = () => {
    return exploreData.map((article) => {
      return (
        <View key={article.id}>
          <ExploreCard article={article} />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>{articleList()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 12,
  },
});

export default ExploreScreen;
