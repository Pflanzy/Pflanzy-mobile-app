import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View, Keyboard,ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import firebase from '../firebase';
import SearchField from '../components/SearchField';
import ReminderCard from "../components/ReminderCard"
const SearchScreen = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  useEffect(() => {
    firebase
      .firestore()
      .collection('plants')
      .get()
      .then((data) => {
        const plants = [];

        data.forEach((element) => {
          plants.push({ id: element.id, ...element.data() });
        });
        setData(plants)
        dispatch({ type: 'ADD_PLANTS', payload: { plants } });
      });
  }, []);

 
  const plantList = () => {
    return data.map((element) => {
      return (
        <View>
          <ReminderCard element={element}/>
        </View>
      );
    }) 
  };
  
const getData = (val) => {
    setPlantData(val)
}
 
  return (
    <View>
      <SearchField sendData={getData} />
      <TouchableWithoutFeedback
        style={styles.wrapper}
        onPress={() => Keyboard.dismiss()}>
        <Text>
          Search Screen - You can tap somewhere here to dismiss the keyboard
        </Text>
  <ScrollView>{data && plantList()}</ScrollView>
        </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
});

export default SearchScreen;
