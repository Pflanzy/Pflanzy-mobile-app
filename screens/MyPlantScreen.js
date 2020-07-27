import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity as DefaultTouch } from 'react-native';
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from '@expo/vector-icons';
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { Transitioning, Transition } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import firebase from '../firebase';
import Colors from '../constants/Colors';
import PflanzyOpacity from '../components/PflanzyOpacity';
import ModalConfigPopup from '../components/ModalConfigPopup';

const MyGardenPlant = ({ navigation }) => {
  const bsSettings = React.createRef();
  const bsInfo = React.createRef();
  const fall = new Animated.Value(1);

  const transition = <Transition.Change interpolation="easeInOut" />;

  const [deg, setDeg] = useState(0);
  const ref = useRef();

  const { plant } = route.params;
  const userID = useSelector((state) => state.id);
  const [rename, setRename] = useState(false);
  const [value, onChangeText] = useState(plant.commonName);

  const renamePlant = () => {
    // Dispatch Action to add a custom name to the plant
  };

  const deletePlantHandler = (selectedPlant) => {
    firebase
      .firestore()
      .collection('plants')
      .doc(userID)
      .update({
        plants: firebase.firestore.FieldValue.arrayRemove(selectedPlant),
      })
      .then(() => {
        navigation.navigate('MyGarden');
      });

    // .set(
    //   {
    //     plants: firebase.firestore.FieldValue.arrayUnion(selectedPlant),
    //   },
    //   { merge: true }
    // );
    // dispatch(updateUser(userID));
    // console.log('adding plant', selectedPlant)
    //  return dispatch({
    //     type: "ADD_PLANT", payload: {
    //     plant: selectedPlant
    //   }})
  };

  const renderInner = () => (
    <View style={styles.settingsContainer}>
      <PflanzyOpacity style={styles.settingsBtns} onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.settingsBtnTitle}>Take Photo</Text>
      </PflanzyOpacity>
      {!rename ? (
        <PflanzyOpacity
          style={styles.settingsBtns}
          onPress={() => {
            setRename(true);
          }}>
          <Text style={styles.settingsBtnTitle}>Rename Plant</Text>
        </PflanzyOpacity>
      ) : (
        <View
          style={{
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '97%',
            alignSelf: 'center',
            height: 52,
            borderRadius: 11,
            marginVertical: 3.5,
          }}>
          <TextInput
            style={{
              width: '80%',
              borderWidth: 1,
              borderColor: 'green',
              borderRadius: 11,
              height: '100%',
              paddingLeft: 10,
            }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={plant.commonName}
            onSubmitEditing={() => renamePlant(plant)}
          />
          <PflanzyOpacity onPress={() => setRename(false)}>
            <AntDesign name="closecircle" size={30} color="green" />
          </PflanzyOpacity>
        </View>
      )}

      <PflanzyOpacity style={styles.deleteSettingsBtns} onPress={() => deletePlantHandler(plant)}>
        <Text style={styles.settingsBtnDelete}>Delete Plant</Text>
      </PflanzyOpacity>
      <PflanzyOpacity style={styles.cancelSettingsBtn} onPress={() => bsSettings.current.snapTo(1)}>
        <Text style={styles.settingsBtnTitle}>Cancel</Text>
      </PflanzyOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.settingsHandleContainer}>
      <View style={styles.settingsHeader}>
        <View style={styles.settingsHandle} />
      </View>
    </View>
  );

  const renderMainInfo = () => (
    <View style={styles.myPlantContainer}>
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

      <View style={styles.reminderBtnContainer}>
        <ModalConfigPopup />
      </View>
      <ScrollView style={styles.plantInfoWrapper}>
        <View style={styles.smallContainer}>
          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Poisonous:</Text>
              <AntDesign style={styles.smallInfoIcon} name="warning" size={30} />
            </View>
            <View style={styles.smallBodyContainer}>
              <Text style={styles.smallInfoBody}>{plant.poisonousForPets}</Text>
            </View>
          </View>

          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Growth:</Text>
              <Entypo style={styles.smallInfoIcon} name="tree" size={30} />
            </View>
            <View style={styles.smallBodyContainer}>
              <Text style={styles.smallInfoBody}>{plant.maxGrowth}</Text>
            </View>
          </View>

          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Origin:</Text>
              <Entypo style={styles.smallInfoIcon} name="globe" size={30} />
            </View>
            <View style={styles.smallBodyContainer}>
              <Text style={styles.smallInfoBody}>Not poisonous for cats and dogs.</Text>
            </View>
          </View>

          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Category:</Text>
              <Entypo style={styles.smallInfoIcon} name="price-tag" size={30} />
            </View>
            <View style={styles.smallBodyContainer}>
              <Text style={styles.smallInfoBody}>Not poisonous for cats and dogs.</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="drop" size={14} color={Colors.tintColor} style={styles.waterDrop} />
              <Text style={styles.infoHeader}>Water</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="light-up" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Light</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <MaterialCommunityIcons
                name="temperature-celsius"
                size={20}
                color={Colors.tintColor}
              />
              <Text style={styles.infoHeader}>Temperature</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <MaterialCommunityIcons name="pot" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Soil</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="bucket" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Re-Potting</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <MaterialCommunityIcons name="spray-bottle" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Fertilizer</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="water" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Humidity</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <FontAwesome5 name="seedling" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Propagation</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.opacityContainer}>
      <BottomSheet
        ref={bsSettings}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction
      />

      <Animated.View
        style={{
          height: '100%',
          backgroundColor: '#e8fffe',
          opacity: Animated.add(0.4, Animated.multiply(fall, 1.0)),
        }}>
        <DefaultTouch style={styles.plantSettings} onPress={() => bsSettings.current.snapTo(0)}>
          <Entypo name="dots-three-vertical" size={25} color="#e0ebe2" />
        </DefaultTouch>

        <DefaultTouch
          style={styles.imageContainer}
          onPress={() => {
            bsInfo.current.snapTo(0);
            bsSettings.current.snapTo(1);
          }}
          activeOpacity={1}>
          <Svg height="85%" width="100%">
            <ClipPath id="clip">
              <Circle r="83%" cx="50%" />
            </ClipPath>
            <Image
              href={plant.images.imagePrimary}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip)"
            />
          </Svg>
          <View style={styles.nameContainer}>
            <View style={styles.commonNameContainer}>
              <Text style={styles.commonName}>{plant.commonName}</Text>
            </View>
            <View>
              <Text style={styles.botName}>
                Botanical name: <Text style={styles.botNameInner}>{plant.scientificName} </Text>
              </Text>
            </View>
          </View>
        </DefaultTouch>

        <BottomSheet
          ref={bsInfo}
          snapPoints={['45%', '75%']}
          renderContent={renderMainInfo}
          initialSnap={0}
          enabledGestureInteraction
          onOpenEnd={() => {
            ref.current.animateNextTransition();
            setDeg(180);
          }}
          onCloseEnd={() => {
            ref.current.animateNextTransition();
            setDeg(0);
          }}
        />
      </Animated.View>
    </View>
  );
};

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

  opacityContainer: {
    backgroundColor: '#2c2c2f',
  },
  settingsContainer: {
    padding: 20,
    backgroundColor: Colors.tintColor,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  settingsBtns: {
    borderRadius: 10,
    backgroundColor: Colors.defaultWhite,
    marginVertical: 3,
    marginHorizontal: 5,
  },

  settingsBtnTitle: {
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
    color: Colors.tintColor,
    fontWeight: '600',
  },

  deleteSettingsBtns: {
    borderRadius: 10,
    backgroundColor: Colors.defaultWhite,
    marginVertical: 3,
    marginHorizontal: 5,
  },

  settingsBtnDelete: {
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
    color: '#c4392d',
    fontWeight: '600',
  },

  cancelSettingsBtn: {
    borderRadius: 10,
    backgroundColor: '#d1cfce',
    marginHorizontal: 5,
    marginVertical: 25,
  },

  settingsHandleContainer: {
    backgroundColor: Colors.tintColor,
    shadowColor: '#333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  settingsMainInfo: {
    backgroundColor: Colors.defaultWhite,
    paddingTop: 20,
  },

  settingMainInfoSeparator: {
    paddingBottom: 20,
  },

  settingsHeader: {
    alignItems: 'center',
  },

  settingsHandle: {
    width: 40,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },

  plantSettings: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    top: 10,
    right: 5,
    zIndex: 100,
  },

  imageContainer: {
    height: '48%',
  },

  myPlantContainer: {
    display: 'flex',
    height: '100%',
    backgroundColor: Colors.tintColor,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  nameContainer: {
    width: '80%',
    height: 80,
    backgroundColor: '#fff',
    position: 'absolute',
    top: '63%',
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#404040',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    display: 'flex',
    padding: 10,
  },

  commonName: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.darkGreen,
    alignSelf: 'center',
    marginBottom: 3,
  },

  commonNameContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e2de',
  },

  botName: {
    color: Colors.darkGreen,
    fontWeight: '300',
    alignSelf: 'center',
  },

  botNameInner: {
    marginLeft: 5,
    fontWeight: '400',
  },

  reminderBtnContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  plantInfoWrapper: {
    paddingVertical: 10,
  },

  smallContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
  smallInfoWrapper: {
    backgroundColor: '#e2ebe6',
    borderRadius: 15,
    width: '48%',
    marginBottom: 15,
    height: 100,
  },

  smallInfoHeaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#e2ebe6',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '50%',
  },

  smallInfoHeader: {
    color: Colors.tintColor,
    fontSize: 20,
    paddingVertical: 10,
  },

  smallInfoIcon: {
    position: 'absolute',
    opacity: 0.2,
    color: Colors.tintColor,
  },

  smallBodyContainer: {
    backgroundColor: '#bfdee3',
    height: '50%',
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallInfoBody: {
    textAlign: 'center',
    color: Colors.tintColor,
  },

  infoContainer: {
    marginTop: 30,
    marginBottom: 20,
  },

  infoWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 15,
  },

  infoHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
    borderRadius: 5,
    backgroundColor: '#e2ebe6',
    paddingVertical: 3,
    flexShrink: 1,
  },

  infoHeader: {
    fontSize: 20,
    color: Colors.tintColor,
    paddingHorizontal: 10,
    fontWeight: '500',
  },

  infoBody: {
    lineHeight: 28,
    marginTop: 10,
    marginBottom: 25,
    color: '#e2ebe6',
  },
});

export default MyGardenPlant;
