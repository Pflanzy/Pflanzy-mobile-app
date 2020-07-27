import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import BasicCard from '../components/BasicCard';

const MyGardenScreen = () => {
  const plants = useSelector((state) => state.plants);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text> My Garden Screen </Text>
        {plants &&
          plants.map((plant) => {
            return <BasicCard plant={plant} key={plant.id} />;
          })}
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
