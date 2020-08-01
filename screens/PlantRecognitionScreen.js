import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { showMessage } from 'react-native-flash-message';
import plants from '../data/data.json';
import Colors from '../constants/Colors';

const PlantRecognitionScreen = ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [stuck, setStuck] = useState(false);

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
        style={{ flex: 1, paddingBottom: 50 }}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
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
              size={40}
              color="white"
              style={{ marginRight: 50 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={async () => {
              setProcessing(true);
              setTimeout(() => {
                setStuck(true);
              }, 10000);
              if (cameraRef) {
                // Taken photo is here
                const photo = await cameraRef.takePictureAsync();
                // We can use the uri property from photo to reach the taken picture and do what we want.
                // ImagePicker saves the taken photo to disk and returns a local URI to it
                const localUri = photo.uri;
                const filename = localUri.split('/').pop();

                // Infer the type of the image
                const match = /\.(\w+)$/.exec(filename);
                const imageType = match ? `image/${match[1]}` : `image`;

                // Upload the image using the fetch and FormData APIs
                const formData = new FormData();
                // Assume "photo" is the name of the form field the server expects
                formData.append('organs', 'flower');
                formData.append('images', { uri: localUri, name: filename, type: imageType });
                try {
                  const data = await fetch(
                    'https://my-api.plantnet.org/v2/identify/all?api-key=2a10M6Omnnm5LOhRgHN9aqGu',
                    {
                      method: 'POST',
                      body: formData,
                      headers: {
                        'content-type': 'multipart/form-data',
                      },
                    }
                  ).then((res) => res.json());

                  const scientificName =
                    data?.results[0]?.species?.genus?.scientificNameWithoutAuthor;
                  const targetPlant = plants.find(
                    (plant1) =>
                      plant1?.scientificName.includes(scientificName) ||
                      scientificName.includes(plant1?.scientificName)
                  );
                  if (targetPlant) {
                    navigation.navigate('IndividualPlant', { element: targetPlant });
                    setProcessing(false);
                  } else if (!targetPlant || stuck) {
                    setProcessing(false);
                    showMessage({
                      message: 'Plant could not be found',
                      description: 'Please try another plant',
                      type: 'danger',
                      animated: true,
                      icon: 'danger',
                    });
                  }
                } catch (e) {
                  setProcessing(false);
                  showMessage({
                    message: 'Plant could not be found',
                    description: 'Please try another plant',
                    type: 'danger',
                    animated: true,
                    icon: 'danger',
                  });
                }
              }
            }}>
            {processing ? (
              <ActivityIndicator size="large" color={Colors.infoMainColor} />
            ) : (
              <View
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
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
                    borderColor: 'white',
                    height: 40,
                    width: 40,
                    backgroundColor: 'white',
                  }}
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default PlantRecognitionScreen;
