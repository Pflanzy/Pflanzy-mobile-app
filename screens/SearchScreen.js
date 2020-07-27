import React, { useState } from 'react';
import { StyleSheet, Modal, ImageBackground } from 'react-native';
import plantData from '../data/data.json';
import photo from '../assets/images/photo-1517191434949-5e90cd67d2b6.jpeg';
import { SearchBar } from 'react-native-elements';
import SearchFieldModal from '../components/SearchFieldModal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.modalReducer.open);
  return (
    <>
      <ImageBackground source={photo} style={styles.photo}>
        <Modal visible={modalVisible} animationType="slide">
          <SearchFieldModal
            plantData={plantData}
            dispatch={dispatch}
          />
        </Modal>
        <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE' })}>
          <SearchBar
            disabled
            round
            containerStyle={{
              backgroundColor: 'transparent',
              borderStyle: 'dashed',
              marginTop: 80,
              width:"90%",
              alignSelf:"center"
            }}
            onPress={() => dispatch({ type: 'TOGGLE' })}
            inputContainerStyle={{ backgroundColor: 'white' }}
            searchIcon={{ backgroundColor: 'transparent' }}
            placeholder="Search for plants"
          />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingTop: 100,
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SearchScreen;
