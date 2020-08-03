import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import Colors from '../constants/Colors';
import SearchField from './SearchField';
import IndividualCard from './IndividualCard';
import cactus from '../assets/images/cactus.png';

const SearchFieldModal = ({ plantData, dispatch }) => {
  const initialData = plantData.sort((a, b) => (a.commonName > b.commonName ? 1 : -1));
  const [filteredData, setFilteredData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    setFilteredData(initialData);
    const myTimeOut = setTimeout(() => {
      setShowLoading(false);
    }, 800);
    return () => {
      clearTimeout(myTimeOut);
    };
  }, []);

  const loadingFunction = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.darkGreen} />
      </View>
    );
  };
  const getData = (val) => {
    if (initialData) {
      const filteredResult = initialData.filter((element) => {
        return (
          element.commonName.toLowerCase().startsWith(val.toLowerCase()) ||
          element.scientificName.toLowerCase().startsWith(val.toLowerCase())
        );
      });
      setFilteredData(filteredResult);
    }
  };
  const renderItem = ({ item }) => {
    return <IndividualCard item={item} />;
  };
  return (
    <View style={styles.mainWrapper}>
      <Button
        onPress={() => dispatch({ type: 'TOGGLE' })}
        buttonStyle={{
          paddingLeft: 40,
          paddingTop: 35,
          marginBottom: -10,
          width: 100,
          marginLeft: -30,
        }}
        icon={<AntDesign name="close" size={35} color={Colors.darkGreen} />}
        type="clear"
        iconRight
      />

      <SearchField sendData={getData} />
      {showLoading ? (
        loadingFunction()
      ) : (
        <TouchableWithoutFeedback style={styles.wrapper} onPress={() => Keyboard.dismiss()}>
          {filteredData.length > 0 ? (
            <View style={styles.plantList}>
              <OptimizedFlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.scientificName}
                contentContainerStyle={styles.flatList}
              />
            </View>
          ) : (
            <View style={styles.cactusWrapper}>
              <Image source={cactus} style={styles.cactusIcon} />
              <Text style={styles.errorMsg}>Sorry, no matching plants :)</Text>
            </View>
          )}
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: Colors.tintColor,
    minHeight: '100%',
  },
  wrapper: {
    paddingBottom: 30,
  },
  flatList: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '55%',
  },
  plantList: {
    paddingBottom: 285,
  },
  cactusWrapper: {
    justifyContent: 'center',
    height: 400,
    alignItems: 'center',
  },
  cactusIcon: {
    height: 100,
    width: 100,
  },
  errorMsg: {
    fontSize: 20,
    marginTop: 10,
  },
});
export default SearchFieldModal;
