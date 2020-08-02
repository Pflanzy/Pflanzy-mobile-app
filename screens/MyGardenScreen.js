import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import BasicCard from '../components/BasicCard';
import Colors from '../constants/Colors';

const MyGardenScreen = () => {
  const plants = useSelector((state) => state.userReducer.plants);
  return (
  <View style={{backgroundColor:Colors.lightPink, minHeight:"100%"}}>
    <ScrollView contentContainerStyle={styles.wrapper}>
      {plants?.length > 0 ? (
        <View style={styles.container}>
          {plants.map((plant) => {
              return <BasicCard plant={plant} key={plant.id} />;
            })}
        </View>
      ) : (
        <View style={styles.plantsIconWrapper}>
          <Image source={{uri:"https://media1.tenor.com/images/22e52165d824572fa4ece1ee968aa6f6/tenor.gif?itemid=16288922"}} style={styles.plantsIconIcon} />
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
    backgroundColor:Colors.lightPink
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
    height: 350,
    width: 350,
    marginBottom: 10,
  },
  errorMsg: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default MyGardenScreen;
