import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Keyboard, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import firebase from '../firebase';
import SearchField from '../components/SearchField';
import ReminderCard from '../components/ReminderCard';
const SearchScreen = () => {
  const dispatch = useDispatch();
  const [initialData, setInitialData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection('plants').orderBy("commonName","asc")
      .get()
      .then((data) => {
        const plants = [];
        data.forEach((element) => {
          plants.push({ id: element.id, ...element.data() });
        })
        setInitialData(plants);
        dispatch({ type: 'ADD_PLANTS', payload: { plants } });
      });
  }, []);

  useEffect(() => {
    setFilteredData(initialData)
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

  const showLoading = () => {
    return (
      <View style={styles.loadingContainer}>
<ActivityIndicator size="large" color="#0000ff"/>
      </View>
    )
  }
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
    <View style={styles.parentWrapper}>
      <SearchField sendData={getData} />
      <TouchableWithoutFeedback
        style={styles.wrapper}
        onPress={() => Keyboard.dismiss()}>
          {showLoading()}
        <ScrollView></ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '88%',
  },
  loadingContainer: {
    justifyContent:"flex-start",
    borderWidth:2,
  }
});

export default SearchScreen;
