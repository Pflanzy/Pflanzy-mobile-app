import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import BasicCard from '../components/BasicCard';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import Colors from '../constants/Colors';

const MyGardenScreen = () => {
  const plants = useSelector((state) => state.userReducer.plants);
  const renderItem = ({item}) => {
    return <BasicCard plant={item}/>
  }
  return (
    <View style={styles.container}>
      {plants?.length > 0 ? (
         <OptimizedFlatList data={plants} renderItem={renderItem} />
      ) : (
        <View style={styles.plantsIconWrapper}>
          <Image source={{uri:"https://media1.tenor.com/images/22e52165d824572fa4ece1ee968aa6f6/tenor.gif?itemid=16288922"}} style={styles.plantsIcon} />
          <Text style={styles.errorMsg}>There are no plants in your garden yet.</Text>
        </View>
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Colors.lightPink,
    minHeight:"100%",
    minWidth:400
  },
  plantsIconWrapper: {
    justifyContent: 'center',
    height: 550,
    alignItems: 'center',
  },
  plantsIcon: {
    height: 250,
    width: 250,
    marginBottom: 10,
  },
  errorMsg: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default MyGardenScreen;
