import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity as DefaultTouch } from 'react-native';
import { MaterialCommunityIcons, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { Transitioning, Transition } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import DateTimePicker from '../components/DateTimePicker';
import PflanzyOpacity from '../components/PflanzyOpacity';
import ModalConfigPopup from '../components/ModalConfigPopup';

const MyGardenPlant = ({ navigation }) => {
  // const navigation = useNavigation();
  const bsSettings = React.createRef();
  const bsInfo = React.createRef();
  const fall = new Animated.Value(1);
  const transition = <Transition.Change interpolation="easeInOut" />;

  const [deg, setDeg] = useState(0);
  const ref = useRef();
  // const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    fadeAnim.interpolate({
      inputRange: [0, 180],
      outputRange: [0, 180],
    });
  };

  const NeuMorph = ({ children }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>{children}</View>
      </View>
    );
  };

  const renderInner = () => (
    <View style={styles.settingsContainer}>
      <PflanzyOpacity style={styles.settingsBtns} onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.settingsBtnTitle}>Take Photo</Text>
      </PflanzyOpacity>
      <PflanzyOpacity style={styles.settingsBtns}>
        <Text style={styles.settingsBtnTitle}>Rename Plant</Text>
      </PflanzyOpacity>
      <PflanzyOpacity style={styles.deleteSettingsBtns}>
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
        <DateTimePicker />
      </View>
      <ScrollView style={styles.plantInfoWrapper}>
        <View style={styles.smallContainer}>
          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Poisonous</Text>
            </View>
            <Text style={styles.smallInfoBody}>Not poisonous for cats and dogs.</Text>
            <AntDesign style={styles.smallInfoIcon} name="warning" size={50} />
          </View>
          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Text style={styles.smallInfoHeader}>Growth</Text>
            </View>
            <Entypo style={styles.smallInfoIcon} name="tree" size={50} />
            <Text style={styles.smallInfoBody}>10-20 cm</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="drop" size={14} color={Colors.darkGreen} style={styles.waterDrop} />
              <Text style={styles.infoHeader}>Water</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Entypo name="light-up" size={20} color={Colors.darkGreen} />
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
                color={Colors.darkGreen}
              />
              <Text style={styles.infoHeader}>Temperature</Text>
            </View>
            <Text style={styles.infoBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
              ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
            </Text>
          </View>
        </View>
        <View style={styles.infoBtnContainer}>
          <PflanzyOpacity onPress={() => navigation.navigate('IndividualPlant')}>
            <NeuMorph>
              <View style={styles.infoBtn}>
                <LinearGradient
                  colors={['#004e57', '#008080', '#004e57']}
                  start={[0.0, 0.0]}
                  end={[1.0, 1.0]}
                  style={{ width: 240, borderRadius: 17, padding: 10 }}>
                  <Text style={styles.infoBtnTxt}>More info</Text>
                </LinearGradient>
              </View>
            </NeuMorph>
          </PflanzyOpacity>
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
          backgroundColor: '#e0ffea',
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
              href={require('../assets/images/water-lilly.jpg')}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip)"
            />
          </Svg>
          <View style={styles.nameContainer}>
            <View style={styles.commonNameContainer}>
              <Text style={styles.commonName}>Common name/Given name</Text>
            </View>
            <View>
              <Text style={styles.botName}>
                Botanical name: <Text style={styles.botNameInner}>Spathiphyllum Wallisii</Text>
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
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: '#d0d1c5',
  },

  bottomShadow: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: '#909188',
  },

  opacityContainer: {
    backgroundColor: '#2c2c2f',
  },
  settingsContainer: {
    padding: 20,
    backgroundColor: Colors.tintColor,
    height: '100%',
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
    backgroundColor: '#fafafa',
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

  infoBtnContainer: {
    width: '100%',
    alignItems: 'center',
  },

  infoBtn: {
    marginBottom: 30,
  },

  infoBtnTxt: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.defaultWhite,
    fontWeight: '600',
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
    marginBottom: 20,
  },
  smallInfoWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: Colors.defaultWhite,
    borderRadius: 15,
    width: '48%',
  },

  smallInfoHeader: {
    color: Colors.tintColor,
    fontSize: 20,
    paddingHorizontal: 10,
  },

  smallInfoIcon: {
    position: 'absolute',
    top: '40%',
    opacity: 0.2,
    color: Colors.tintColor,
  },

  smallInfoHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.defaultWhite,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  smallInfoBody: {
    textAlign: 'center',
    color: Colors.tintColor,
    paddingVertical: 15,
    paddingHorizontal: 5,
    // alignItems: 'center',
  },

  infoContainer: {
    marginVertical: 25,
  },

  infoWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  infoHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%',
    // paddingHorizontal: 10,
    // borderRadius: 5,
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
    paddingVertical: 3,
    flexShrink: 1,
  },

  infoHeader: {
    fontSize: 20,
    color: Colors.tintColor,
    paddingHorizontal: 10,
    fontWeight: '500',
    // fontFamily: '',
  },

  infoBody: {
    lineHeight: 28,
    marginTop: 10,
    marginBottom: 25,
    color: Colors.textGrey,
  },
});

export default MyGardenPlant;
