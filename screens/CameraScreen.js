import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import firebase from '../firebase';
import Colors from '../constants/Colors';

const CameraScreen = ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const { plantId } = route.params;

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
              <Ionicons
                name="ios-flash-off"
                size={35}
                color={Colors.defaultWhite}
                // style={{ paddingLeft: 30 }}
              />
            ) : (
              <Ionicons
                name="ios-flash"
                size={35}
                color={Colors.defaultWhite}
                // style={{ paddingLeft: 30 }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            // style={{ alignSelf: 'center' }}
            onPress={async () => {
              setProcessing(true);
              if (cameraRef) {
                // Taken photo is here
                const photo = await cameraRef.takePictureAsync();
                // We can use the uri property from photo to reach the taken picture and do what we want.
                const userplantsRef = firebase.firestore().collection('plants').doc(plantId);

                userplantsRef
                  .update({
                    'custom.picture': photo.uri,
                  })
                  .then(() => {
                    setProcessing(false);
                    navigation.navigate('MyPlant');
                  });
              }
            }}>
            {processing ? (
              <ActivityIndicator size={80} />
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
            <Ionicons
              name="ios-reverse-camera"
              size={35}
              color={Colors.defaultWhite}

              // style={{ paddingRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
