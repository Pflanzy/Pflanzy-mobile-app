import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import firebase from '../firebase';
import SearchField from '../components/SearchField';

const SearchScreen = () => {
  const dispatch = useDispatch();

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
        dispatch({ type: 'ADD_PLANTS', payload: { plants } });
      });
  }, []);
  return (
    <View>
      <SearchField />
      <TouchableWithoutFeedback style={styles.wrapper} onPress={() => Keyboard.dismiss()}>
        <Text> Search Screen - You can tap somewhere here to dismiss the keyboard</Text>
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
