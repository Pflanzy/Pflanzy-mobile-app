import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExploreCard from '../components/ExploreCard';
import exploreData from '../data/browse.json'
import { ScrollView } from 'react-native-gesture-handler';

const ExploreScreen = () => {
  const articleList = () => {
    return exploreData.map((article) => {
      return (
        <View key={article.id}>
          <ExploreCard article={article}/>
        </View>
      )
    })
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        {articleList()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 20
  },
});

export default ExploreScreen;
