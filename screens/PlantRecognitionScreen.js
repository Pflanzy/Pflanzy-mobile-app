import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import recognizePlant from '../helpers/recognizePlant';
import Colors from '../constants/Colors';

const PlantRecognitionScreen = ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [stuck, setStuck] = useState(false);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) {
      setProcessing(true);
      recognizePlant(pickerResult, navigation, setProcessing);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1, justifyContent: 'flex-end' }}
        type={type}
        flashMode={flash}
        ref={(ref) => {
          setCameraRef(ref);
        }}>
        <View style={{ position: 'absolute', bottom: 100, left: 35 }}>
          <TouchableOpacity onPress={openImagePickerAsync}>
            <Ionicons name="ios-images" size={50} color={Colors.defaultWhite} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#00000099',

            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
            paddingHorizontal: 35,
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              alignItems: 'center',

              paddingTop: 10,
            }}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              );
            }}>
            {flash === Camera.Constants.FlashMode.off ? (
              <Ionicons name="ios-flash-off" size={35} color={Colors.defaultWhite} />
            ) : (
              <Ionicons name="ios-flash" size={35} color={Colors.defaultWhite} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              setProcessing(true);
              setTimeout(() => {
                setStuck(true);
              }, 10000);
              if (cameraRef) {
                // Taken photo is here
                await cameraRef.takePictureAsync({
                  skipProcessing: true,
                  onPictureSaved: async (photo) => {
                    recognizePlant(photo, navigation, setProcessing, stuck);
                  },
                });
                // We can use the uri property from photo to reach the taken picture and do what we want.
                // ImagePicker saves the taken photo to disk and returns a local URI to it
              }
            }}>
            {processing ? (
              <ActivityIndicator size="large" color={Colors.infoMainColor} />
            ) : (
              <View
                style={{
                  borderWidth: 2,
                  borderColor: Colors.defaultWhite,
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: Colors.defaultWhite,
                    height: 40,
                    width: 40,
                    backgroundColor: Colors.defaultWhite,
                  }}
                />
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              alignItems: 'center',
              paddingTop: 10,
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Ionicons name="ios-reverse-camera" size={35} color={Colors.defaultWhite} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default PlantRecognitionScreen;
