import React from 'react';
import { Platform, TouchableOpacity as RNTO } from 'react-native';
import { TouchableOpacity as GHTO } from 'react-native-gesture-handler';

const PflanzyOpacity = (props) => {
  if (Platform.OS === 'ios') {
    // eslint-disable-next-line
    return <RNTO {...props} />;
  }
  // eslint-disable-next-line
  return <GHTO {...props}/>;
};
export default PflanzyOpacity;
