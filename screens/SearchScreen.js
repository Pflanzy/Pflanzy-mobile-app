import React from 'react';
import { Platform, StyleSheet, Modal, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import plantData from '../data/data.json';
import photo from '../assets/images/photo-1517191434949-5e90cd67d2b6.jpeg';
import SearchFieldModal from '../components/SearchFieldModal';
import PflanzyOpacity from '../components/PflanzyOpacity';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.modalReducer.open);

  return (
    <>
      <ImageBackground source={photo} style={styles.photo}>
        <Modal visible={modalVisible} animationType="slide">
          <SearchFieldModal plantData={plantData} dispatch={dispatch} />
        </Modal>
        <SearchBar
          disabled
          round
          containerStyle={{
            position: 'absolute',
            top: 50,
            alignSelf: 'center',
            width: 350,
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
          }}
          onPress={() => dispatch({ type: 'TOGGLE' })}
          inputContainerStyle={{ backgroundColor: 'white', position: 'absolute' }}
          searchIcon={{ backgroundColor: 'transparent', paddingLeft: 10 }}
          placeholder="Search for plants"
        />
        <PflanzyOpacity
          onPress={() => dispatch({ type: 'TOGGLE' })}
          activeOpacity={0.7}
          style={{
            marginTop: 20,
            height: `${Platform.OS === 'ios' ? '25%' : '55%'}`,
            alignItems: 'center',
          }}
        />
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
    position: 'absolute',
    zIndex: 0,
  },
});

export default SearchScreen;
