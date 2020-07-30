import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CameraIcon = (path) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(path)}>
      <Ionicons name="md-camera" size={50} />
    </TouchableOpacity>
  );
};
export default CameraIcon;
