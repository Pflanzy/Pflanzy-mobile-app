import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SearchField from '../components/SearchField';
import IndividualCard from '../components/IndividualCard';
import plantData from '../data/data.json';
import cactus from '../assets/images/cactus.png';

const SearchScreen = () => {
  const [initialData, setInitialData] = useState(
    plantData.sort((a, b) => (a.commonName > b.commonName ? 1 : -1)),
  );
  const [filteredData, setFilteredData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    setFilteredData(initialData);
    const myTimeOut = setTimeout(() => {
      setShowLoading(false);
    }, 500);
    return () => {
      clearTimeout(myTimeOut);
    };
  }, []);
  const plantList = () => {
    return filteredData.map((element) => {
      return (
        <View key={element.scientificName}>
          <IndividualCard element={element} />
        </View>
      );
    });
  };

  const loadingFunction = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#048243" />
      </View>
    );
  };
  const getData = (val) => {
    if (initialData) {
      const filteredResult = initialData
        .filter((element) => {
          return element.commonName.toLowerCase().startsWith(val.toLowerCase());
        })
        .sort((a, b) => (a.commonName > b.commonName ? 1 : -1));
      setFilteredData(filteredResult);
    }
  };

  return (
    <View style={styles.parentWrapper}>
      <SearchField sendData={getData} />
      {showLoading ? (
        loadingFunction()
      ) : (
        <TouchableWithoutFeedback
          style={styles.wrapper}
          onPress={() => Keyboard.dismiss()}>
          <ScrollView>
            {filteredData.length >0 ? (
              plantList()
            ) : (
              <View style={styles.cactusWrapper}>
                <Image source={cactus} style={styles.cactusIcon} />
                <Text style={styles.errorMsg}>Sorry, no matching plants :)</Text>
              </View>
            )}
          </ScrollView>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '88%',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '55%',
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

export default SearchScreen;
