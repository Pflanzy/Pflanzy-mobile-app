import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import BasicCard from '../components/BasicCard';
import Colors from '../constants/Colors';
import background from '../assets/images/plant-background-1.jpg';

const MyGardenScreen = () => {
  const plants = useSelector((state) => state.userReducer.plants);
  return (
    <View style={{ minHeight: '100%' }}>
      <ScrollView contentContainerStyle={styles.wrapperWhenPlants}>
        {plants?.length > 0 ? (
          <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>
              {plants.map((plant) => {
                return <BasicCard plant={plant} key={plant.id} />;
              })}
            </View>
          </ImageBackground>
        ) : (
          <View style={styles.wrapperWhenNoPlants}>
            <Image
              source={{
                uri:
                  'https://media1.tenor.com/images/22e52165d824572fa4ece1ee968aa6f6/tenor.gif?itemid=16288922',
              }}
              style={styles.plantsIconIcon}
            />
            <Text style={styles.errorMsg}>There are no plants in your garden yet.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    backgroundColor: Colors.lightPink,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapperWhenNoPlants: {
    justifyContent: 'center',
    minHeight: '100%',
    alignItems: 'center',
    backgroundColor: Colors.lightPink,
  },
  plantsIconIcon: {
    height: 350,
    width: 350,
    marginBottom: 10,
  },
  errorMsg: {
    fontSize: 20,
    marginTop: 10,
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 0,
    // opacity: 0.3,
  },
});

export default MyGardenScreen;
