import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
  ImageBackground,
  Modal,
  Button,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Transitioning, Transition } from 'react-native-reanimated';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import PflanzyOpacity from '../components/PflanzyOpacity';

import firebase, { updateUser } from '../firebase';
import Colors from '../constants/Colors';

const IndividualPlantScreen = (navigation) => {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.userReducer.id);
  const navigate = useNavigation();
  // arrow transition for bottom sheet
  const transition = <Transition.Change interpolation="easeInOut" />;
  const [deg, setDeg] = useState(0);
  const ref = useRef();

  const plant = navigation.route.params.element;

  const addPlantHandler = (selectedPlant) => {
    // TODO: Rename plants collection
    firebase
      .firestore()
      .collection('plants')
      .add({ ...selectedPlant, userID });

    dispatch(updateUser(userID));
    // console.log('adding plant', selectedPlant)
    //  return dispatch({
    //     type: "ADD_PLANT", payload: {
    //     plant: selectedPlant
    //   }})
    showMessage({
      message: 'Plant added',
      description: 'Click here to go My Garden',
      type: 'success',
      animated: true,
      icon: 'success',
      renderFlashMessageIcon: 'asdsadsa',
      onPress: () => navigate.navigate('MyGarden'),
    });
  };

  const NeuMorph = ({ children }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>{children}</View>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Transitioning.View
            ref={ref}
            transition={transition}
            style={{
              alignItems: 'center',
            }}>
            <Ionicons
              name="ios-arrow-up"
              size={24}
              color="#dbd7d3"
              style={{ transform: [{ rotateX: `${deg}deg` }] }}
            />
          </Transitioning.View>
          <View>
            <Text style={styles.nameGeneric}>{plant.commonName}</Text>
            <Text style={styles.nameScientific}>{plant.scientificName}</Text>
          </View>
          <View style={styles.btnContainer}>
            <PflanzyOpacity onPress={() => addPlantHandler(plant)}>
              <NeuMorph>
                <View style={{ marginBottom: 30 }}>
                  <LinearGradient
                    colors={['#004e57', '#004e57', '#004e57']}
                    start={[0.0, 0.0]}
                    end={[1.0, 1.0]}
                    style={{
                      width: 240,
                      borderRadius: 17,
                      padding: 10,
                      elevation: 3,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        color: Colors.defaultWhite,
                        fontWeight: '600',
                      }}>
                      Add To My Garden
                    </Text>
                  </LinearGradient>
                </View>
              </NeuMorph>
            </PflanzyOpacity>
          </View>
          <ScrollView style={styles.contentBody}>
            <Text style={styles.text}>{plant.description}</Text>
            <View style={styles.shortInfoContainer}>
              <View style={styles.shortInfoElement}>
                <Entypo style={styles.shortInfoIcon} name="globe" size={80} color="#006772" />
                <Text style={styles.shortInfoHeadline}>Origin:</Text>
                <Text style={styles.shortInfoText}>{plant.origin}</Text>
              </View>
              <View style={styles.shortInfoElement}>
                <Entypo
                  style={styles.shortInfoIcon}
                  name="price-tag"
                  size={80}
                  color="#006772"
                />
                <Text style={styles.shortInfoHeadline}>Family:</Text>
              <View style={styles.shortInfoElement}>
                <Entypo style={styles.shortInfoIcon} name="tree" size={80} color="#006772" />
                <Text style={styles.shortInfoHeadline}>Growth:</Text>
                <Text style={styles.shortInfoText}>{plant.maxGrowth}</Text>
              </View>
              <View style={styles.shortInfoElement}>
                <AntDesign style={styles.shortInfoIcon} name="warning" size={80} color="#006772" />
                <Text style={styles.shortInfoHeadline}>Poisonous:</Text>
                <Text style={styles.shortInfoText}>{plant.poisonousForPets}</Text>
              </View>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <MaterialCommunityIcons name="temperature-celsius" size={20} color="white" />
                <Text style={styles.infoHeader}>Temperature</Text>
              </View>
              <Text style={styles.infoBody}>{plant.temperature}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <Entypo name="light-up" size={20} color="white" />
                <Text style={styles.infoHeader}>Light</Text>
              </View>
              <Text style={styles.infoBody}>{plant.light}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <Entypo name="drop" size={14} color="white" style={styles.waterDrop} />
                <Text style={styles.infoHeader}>Water</Text>
              </View>
              <Text style={styles.infoBody}>{plant.watering}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <MaterialCommunityIcons name="pot" size={20} color="white" />
                <Text style={styles.infoHeader}>Soil</Text>
              </View>
              <Text style={styles.infoBody}>{plant.soil}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <Entypo name="bucket" size={20} color="white" />
                <Text style={styles.infoHeader}>Re-Potting</Text>
              </View>
              <Text style={styles.infoBody}>{plant.rePotting}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <MaterialCommunityIcons name="spray-bottle" size={20} color="white" />
                <Text style={styles.infoHeader}>Fertilizer</Text>
              </View>
              <Text style={styles.infoBody}>{plant.fertilizer}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <Entypo name="water" size={20} color="white" />
                <Text style={styles.infoHeader}>Humidity</Text>
              </View>
              <Text style={styles.infoBody}>{plant.humidity}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <FontAwesome5 name="seedling" size={20} color="white" />
                <Text style={styles.infoHeader}>Propagation</Text>
              </View>
              <Text style={styles.infoBody}>{plant.propagation}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };

  const bs = React.createRef();

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={['39%', '85%']}
        initialSnap={0}
        renderContent={renderContent}
        onOpenEnd={() => {
          ref.current.animateNextTransition();
          setDeg(180);
        }}
        onCloseEnd={() => {
          ref.current.animateNextTransition();
          setDeg(0);
        }}
      />
      <TouchableWithoutFeedback onPress={() => bs.current.snapTo(0)}>
        <Image style={styles.background} source={{ uri: plant?.images?.imagePrimary }} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default IndividualPlantScreen;

const styles = StyleSheet.create({
  topShadow: {
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: '#d0d1c5',
  },

  bottomShadow: {
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowColor: '#3d3c3b',
  },

  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  background: {
    height: '85%',
    width: '100%',
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
  },
  content: {
    backgroundColor: Colors.tintColor,
    borderTopRightRadius: 80,
    padding: 20,
    width: '100%',
    flex: 1,
  },
  nameGeneric: {
    color: 'white',
    fontSize: 28,
    marginBottom: 10,
  },
  nameScientific: {
    color: 'white',
    marginBottom: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: ' 100%',
  },
  btnReminder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkGreen,
    width: 240,
    padding: 10,
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#79C3CA',
  },
  btnCalendar: {
    backgroundColor: Colors.darkGreen,
    borderRadius: 50,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    paddingLeft: 2,
    paddingTop: 1,
    borderWidth: 2,
    borderColor: '#79C3CA',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 6,
  },
  text: {
    color: Colors.defaultWhite,
    lineHeight: 28,
    marginBottom: 15,
  },
  shortInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 20,
  },
  shortInfoElement: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '44%',
    backgroundColor: Colors.darkGreen,
    height: 120,
    borderRadius: 10,
    margin: 9,
    position: 'relative',
  },
  shortInfoIcon: {
    position: 'absolute',
  },
  shortInfoHeadline: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  shortInfoText: {
    color: 'white',
    width: '90%',
    textAlign: 'center',
  },
  infoWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  infoHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.darkGreen,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexShrink: 1,
  },
  infoHeader: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  infoBody: {
    color: 'white',
    lineHeight: 28,
    marginTop: 10,
    marginBottom: 25,
  },
  modalWrapper: {
    backgroundColor: 'grey',
    width: 300,
    maxHeight: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
