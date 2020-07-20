import  React,{ useState } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import SearchField from '../components/SearchField';
import {
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import data from '../data/data.json';
import ReminderCard from '../components/ReminderCard';

const SearchScreen = () => {
  const [plantData, setPlantData] = useState(data);
  const plantList = () => {
    return  plantData.map((element) => {
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
      <SearchField sendData={getData} plantData={plantData}/>
      <TouchableWithoutFeedback
        style={styles.wrapper}
        onPress={() => Keyboard.dismiss()}>
        <Text>
          Search Screen - You can tap somewhere here to dismiss the keyboard
        </Text>
        <ScrollView>{plantList()}</ScrollView>
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
