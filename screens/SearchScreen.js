import React from 'react';
import { StyleSheet, Modal, ImageBackground, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import plantData from '../data/data.json';
import photo from '../assets/images/photo-1517191434949-5e90cd67d2b6.jpeg';
import SearchFieldModal from '../components/SearchFieldModal';
import PflanzyOpacity from '../components/PflanzyOpacity';
import Colors from '../constants/Colors';

const SearchScreen = ({ navigation }) => {
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
            borderColor: Colors.transparent,
            backgroundColor: Colors.transparent,
            borderBottomColor: Colors.transparent,
            borderTopColor: Colors.transparent,
          }}
          onPress={() => dispatch({ type: 'TOGGLE' })}
          inputContainerStyle={{
            backgroundColor: Colors.defaultWhite,
            position: 'absolute',
            zIndex: 0,
          }}
          searchIcon={{ backgroundColor: Colors.transparent, paddingLeft: 10 }}
          placeholder="Search for plants"
        />
        <PflanzyOpacity
          onPress={() => dispatch({ type: 'TOGGLE' })}
          activeOpacity={0.7}
          style={styles.touchableArea}
        />

        <View style={styles.cameraButtonWrapper}>
          <TouchableOpacity
            style={styles.cameraButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('PlantRecognition')}>
            <FontAwesome5 name="camera" size={50} color={Colors.defaultWhite} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingTop: 100,
  },
  touchableArea: {
    marginTop: 20,
    height: '25%',
    alignItems: 'center',
  },
  cameraButtonWrapper: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
  },
  cameraButton: {
    alignSelf: 'center',
    width: 107,
    height: 107,
    backgroundColor: Colors.darkGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 6,
    borderColor: Colors.tintColor,
    opacity: 0.92,
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
