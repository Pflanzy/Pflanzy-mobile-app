import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity as DefaultTouch,
  Keyboard,
  Platform,
} from 'react-native';
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
import Modal from 'react-native-modal';
import firebase from '../firebase';
import Colors from '../constants/Colors';
import PflanzyOpacity from '../components/PflanzyOpacity';
import ModalConfigPopup from '../components/ModalConfigPopup';
import ModalListPopup from '../components/ModalListPopup';

const MyPlantScreen = ({ route, navigation }) => {
  const bsSettings = React.createRef();
  const bsInfo = React.createRef();
  const fall = new Animated.Value(1);
  const { plantId } = route.params;
  const plant = useSelector((state) =>
    state.userReducer.plants.find((plantToFind) => plantToFind.id === plantId)
  );

  const transition = <Transition.Change interpolation="easeInOut" />;
  const [deg, setDeg] = useState(0);
  const ref = useRef();
  const [rename, setRename] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [value, onChangeText] = useState(plant?.custom?.title ?? plant?.commonName);
  const renamePlant = (selectedPlant) => {
    const userplantsRef = firebase.firestore().collection('plants').doc(selectedPlant.id);
    userplantsRef.update({
      'custom.title': value,
    });
  };

  const deletePlantHandler = (selectedPlant) => {
    firebase
      .firestore()
      .collection('plants')
      .doc(selectedPlant.id)
      .delete()
      .then(() => {
        navigation.navigate('MyGarden');
      });
  };

  const renderInner = () => (
    <View style={styles.settingsContainer}>
      <PflanzyOpacity
        style={styles.settingsBtns}
        onPress={() => {
          navigation.navigate('Camera', { plantId });
          bsSettings.current.snapTo(1);
        }}>
        <Text style={styles.settingsBtnTitle}>Take Photo</Text>
      </PflanzyOpacity>
      <PflanzyOpacity style={styles.settingsBtns} onPress={() => setModalOpen(true)}>
        <Text style={styles.settingsBtnTitle}>Rename Plant</Text>
      </PflanzyOpacity>

      <Modal
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 130,
          width: '80%',
          position: 'absolute',
          top: '30%',
          alignSelf: 'center',
          backgroundColor: Colors.renameModalBg,
          borderRadius: 10,
        }}
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        backdropTransitionOutTiming={40}>
        <TextInput
          style={{
            width: '90%',
            borderWidth: 1,
            borderColor: Colors.transparent,
            borderRadius: 11,
            textAlign: 'center',
            height: '40%',
            color: Colors.defaultBlack,
            margin: 20,
            backgroundColor: Colors.defaultWhite,
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          onSubmitEditing={() => {
            if (value) {
              renamePlant(plant);
              setRename(false);
            }
          }}
        />
        <View style={styles.renameIconWrapper}>
          <DefaultTouch
            onPress={() => {
              setRename(false);
              setModalOpen(false);
              bsSettings.current.snapTo(1);
            }}>
            <AntDesign
              style={styles.renameIcon}
              name="closecircle"
              size={35}
              color={Colors.cancelColor}
            />
          </DefaultTouch>
          <DefaultTouch
            onPress={() => {
              setModalOpen(false);
              Keyboard.dismiss();
              renamePlant(plant);
              bsSettings.current.snapTo(1);
            }}>
            <AntDesign
              style={styles.renameIcon}
              name="checkcircle"
              size={35}
              color={Colors.tintColor}
            />
          </DefaultTouch>
        </View>
      </Modal>

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
          color={Colors.arrowColor}
          style={{ transform: [{ rotateX: `${deg}deg` }] }}
        />
      </Transitioning.View>

      <View style={styles.reminderBtnContainer}>
        <ModalConfigPopup
          plantName={plant?.custom?.title ? plant.custom.title : plant?.commonName}
          plantId={plant?.id && plant.id}
        />
        <View style={styles.gearContainer}>
          {plant?.custom?.notifications?.length > 0 && (
            <ModalListPopup
              notifications={plant?.custom?.notifications && plant.custom.notifications}
              plantId={plant?.id && plant.id}
            />
          )}
        </View>
      </View>

      <ScrollView style={styles.plantInfoWrapper}>
        <View style={styles.smallContainer}>
          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Poisonous:</Text>
              <AntDesign style={styles.smallInfoIcon} name="warning" size={30} />
            </View>
            <View style={styles.smallBodyContainer}>
              <Text style={styles.smallInfoBody}>{plant?.poisonousForPets}</Text>
            </View>
          </View>

          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Growth:</Text>
              <Entypo style={styles.smallInfoIcon} name="tree" size={30} />
            </View>
            <View style={styles.smallBodyContainer}>
              <Text style={styles.smallInfoBody}>{plant?.maxGrowth}</Text>
            </View>
          </View>

          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Origin:</Text>
              <Entypo style={styles.smallInfoIcon} name="globe" size={30} />
            </View>
            <View style={styles.smallBodyContainer}>
              <Text style={styles.smallInfoBody}>{plant?.origin}</Text>
            </View>
          </View>

          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Family:</Text>
              <Entypo style={styles.smallInfoIcon} name="price-tag" size={30} />
            </View>
            <View style={styles.smallBodyContainer}>
              <Text style={styles.smallInfoBody}>{plant?.familyName}</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="drop" size={14} color={Colors.tintColor} style={styles.waterDrop} />
              <Text style={styles.infoHeader}>Water</Text>
            </View>
            <Text style={styles.infoBody}>{plant?.watering}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="light-up" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Light</Text>
            </View>
            <Text style={styles.infoBody}>{plant?.light}</Text>
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
            <Text style={styles.infoBody}>{plant?.temperature}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <MaterialCommunityIcons name="pot" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Soil</Text>
            </View>
            <Text style={styles.infoBody}>{plant?.soil}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="bucket" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Re-Potting</Text>
            </View>
            <Text style={styles.infoBody}>{plant?.rePotting}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <MaterialCommunityIcons name="spray-bottle" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Fertilizer</Text>
            </View>
            <Text style={styles.infoBody}>{plant?.fertilizer}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="water" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Humidity</Text>
            </View>
            <Text style={styles.infoBody}>{plant?.humidity}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <FontAwesome5 name="seedling" size={20} color={Colors.tintColor} />
              <Text style={styles.infoHeader}>Propagation</Text>
            </View>
            <Text style={styles.infoBody}>{plant?.propagation}</Text>
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
          backgroundColor: Colors.centerBgSpliter,
          opacity: Animated.add(0.4, Animated.multiply(fall, 1.0)),
        }}>
        <DefaultTouch style={styles.plantSettings} onPress={() => bsSettings.current.snapTo(0)}>
          <View
            style={{
              backgroundColor: Colors.settingsIconBg,
              width: 37,
              height: 37,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <Entypo name="dots-three-vertical" size={22} color={Colors.settingsIcon} />
          </View>
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
              href={plant?.custom?.picture ? plant.custom.picture : plant?.images?.imagePrimary}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip)"
            />
          </Svg>
          <View style={styles.nameContainer}>
            <View>
              {plant?.custom?.title ? (
                <Text style={styles.customPlantName}>{plant?.custom?.title}</Text>
              ) : (
                <View />
              )}
            </View>
            <View style={styles.commonNameContainer}>
              <Text style={styles.commonName}>{plant?.commonName}</Text>
            </View>
            <View>
              <Text style={styles.botName}>
                Botanical name: <Text style={styles.botNameInner}>{plant?.scientificName} </Text>
              </Text>
            </View>
          </View>
        </DefaultTouch>

        <BottomSheet
          ref={bsInfo}
          snapPoints={['45%', '78%']}
          renderContent={renderMainInfo}
          initialSnap={0}
          enabledBottomClamp
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
  opacityContainer: {
    backgroundColor: Colors.settingsBgOpacity,
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
    marginVertical: Platform.OS === 'ios' ? 3 : 7,
    marginHorizontal: 5,
  },

  settingsBtnTitle: {
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
    color: Colors.tintColor,
    fontWeight: '600',
  },
  renameIconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
  },
  renameIcon: {
    marginHorizontal: 20,
  },
  deleteSettingsBtns: {
    borderRadius: 10,
    backgroundColor: Colors.defaultWhite,
    marginVertical: Platform.OS === 'ios' ? 3 : 7,
    marginHorizontal: 5,
  },

  settingsBtnDelete: {
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
    color: Colors.settingsDeleteTxt,
    fontWeight: '600',
  },

  cancelSettingsBtn: {
    borderRadius: 10,
    backgroundColor: Colors.settingsCancelBtn,
    marginHorizontal: 5,
    marginVertical: 25,
  },

  settingsHandleContainer: {
    backgroundColor: Colors.tintColor,
    shadowColor: Colors.basicShadows,
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  settingsHeader: {
    alignItems: 'center',
  },

  settingsHandle: {
    width: 40,
    height: 6,
    borderRadius: 4,
    backgroundColor: Colors.settingsHandle,
    marginBottom: 10,
  },

  plantSettings: {
    position: 'absolute',
    height: 50,
    width: 50,
    top: 7,
    right: 5,
    zIndex: 100,
  },

  imageContainer: {
    height: '49%',
  },

  myPlantContainer: {
    display: 'flex',
    height: '100%',
    backgroundColor: Colors.tintColor,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  customPlantName: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.tintColor,
    alignSelf: 'center',
    marginBottom: 5,
  },
  nameContainer: {
    width: '80%',
    backgroundColor: Colors.defaultWhite,
    position: 'absolute',
    top: '63%',
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    shadowColor: Colors.basicShadows,
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
    marginBottom: 8,
  },

  commonNameContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottom,
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

  gearContainer: {
    width: 33,
  },

  reminderBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
  },

  plantInfoWrapper: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },

  smallContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
  smallInfoWrapper: {
    backgroundColor: Colors.defaultWhite,
    borderRadius: 15,
    width: '48%',
    marginBottom: 15,
    height: 110,
  },

  smallInfoHeaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.defaultWhite,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '50%',
  },

  smallInfoHeader: {
    color: Colors.darkGreen,
    fontSize: 20,
    paddingVertical: 10,
  },

  smallInfoIcon: {
    position: 'absolute',
    opacity: 0.2,
    color: Colors.tintColor,
  },

  smallBodyContainer: {
    backgroundColor: Colors.shortInfoBodyBg,
    height: '50%',
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallInfoBody: {
    textAlign: 'center',
    color: Colors.darkGreen,
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
    backgroundColor: Colors.defaultWhite,
    paddingVertical: 3,
    flexShrink: 1,
  },

  infoHeader: {
    fontSize: 20,
    color: Colors.tintColor,
    paddingHorizontal: 10,
    fontWeight: '500',
    paddingVertical: 2,
  },

  infoBody: {
    lineHeight: 28,
    marginTop: 10,
    marginBottom: 25,
    color: Colors.defaultWhite,
  },
});

export default MyPlantScreen;
