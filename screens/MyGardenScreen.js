import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import BasicCard from '../components/BasicCard';

const MyGardenScreen = () => {
  const user = useSelector((state) => state);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text> My Garden Screen </Text>
        {user.plants &&
          user.plants.map((plant) => {
            return <BasicCard plant={plant} key={plant.scientificName} />;
          })}
        <Text>{}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default MyGardenScreen;
