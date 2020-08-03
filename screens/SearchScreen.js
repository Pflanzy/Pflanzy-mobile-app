import React from 'react';
import { Platform, StyleSheet, Modal, ImageBackground, View } from 'react-native';
import { SearchBar, colors } from 'react-native-elements';
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
          style={{
            marginTop: 20,
            height: '25%',
            alignItems: 'center',
          }}
        />
        <View style={{ position: 'absolute', top: '55%', alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: 100,
              height: 100,
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}
            onPress={() => navigation.navigate('PlantRecognition')}>
            <FontAwesome5 name="camera" size={55} />
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
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 0,
  },
});

export default SearchScreen;
