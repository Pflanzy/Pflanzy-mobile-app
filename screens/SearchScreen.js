import * as React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SearchField from '../components/SearchField';

const SearchScreen = () => {
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
