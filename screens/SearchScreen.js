import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Keyboard, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import firebase from '../firebase';
import SearchField from '../components/SearchField';
import ReminderCard from '../components/ReminderCard';
const SearchScreen = () => {
  const dispatch = useDispatch();
  const [initialData, setInitialData] = useState();
  const [filteredData, setFilteredData] = useState();
  useEffect(() => {
    firebase
      .firestore()
      .collection('plants')
      .get()
      .then((data) => {
        const plants = [];
        data.forEach((element) => {
          plants.push({ id: element.id, ...element.data() });
        })
        setInitialData(plants);
        setFilteredData(initialData);
        dispatch({ type: 'ADD_PLANTS', payload: { plants } });
      });
  }, [initialData]);

  const plantList = () => {
    return filteredData.map((element) => {
      return (
        <View>
          <ReminderCard element={element} />
        </View>
      );
    });
  };

  const getData = (val) => {
    if (initialData) {
      const filteredResult = initialData
        .filter((element) => {
          return element.commonName.toLowerCase().includes(val.toLowerCase());
        })
        .sort((a, b) => (a.commonName > b.commonName ? 1 : -1));
      setFilteredData(filteredResult);
    }
  };

  return (
    <View>
      <SearchField sendData={getData} />
      <TouchableWithoutFeedback
        style={styles.wrapper}
        onPress={() => Keyboard.dismiss()}>
        <ScrollView>{filteredData ? plantList() : <Text> dsfdsfds</Text>}</ScrollView>
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
