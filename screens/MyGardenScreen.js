import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import BasicCard from '../components/BasicCard';
import plantsIcon from '../assets/images/plants.png';

const MyGardenScreen = () => {
  const plants = useSelector((state) => state.userReducer.plants);
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {plants.length > 0 ? (
        <View style={styles.container}>
          {plants &&
            plants.map((plant) => {
              return <BasicCard plant={plant} key={plant.id} />;
            })}
        </View>
      ) : (
        <View style={styles.plantsIconWrapper}>
          <Image source={plantsIcon} style={styles.plantsIconIcon} />
          <Text style={styles.errorMsg}>There are no plants in your garden yet.</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  plantsIconWrapper: {
    justifyContent: 'center',
    height: 550,
    alignItems: 'center',
  },
  plantsIconIcon: {
    height: 140,
    width: 140,
    marginBottom: 10,
  },
  errorMsg: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default MyGardenScreen;
