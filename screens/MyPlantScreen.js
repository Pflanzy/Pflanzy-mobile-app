import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity as DefaultTouch } from 'react-native';

import { MaterialCommunityIcons, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import DateTimePicker from '../components/DateTimePicker';
import PflanzyOpacity from '../components/PflanzyOpacity';

const MyGardenPlant = ({ navigation }) => {
  // const navigation = useNavigation();

  const bsSettings = React.createRef();
  const bsInfo = React.createRef();
  const fall = new Animated.Value(1);
  // const transArrow = new Animated.Value(0);
  // const rotateAnim = useRef(new Animated.Value(0)).current;
  // const rotateInterpolatedAnim = rotateAnim.interpolate({
  //   inputRange: [0, 180],
  //   outputRange: ['0deg', '180deg'],
  // });

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

  // const renderMainInfoHeader = () => (
  //   <View style={styles.settingsMainInfo}>
  //     <View style={styles.settingsHeader}>
  //       <View style={styles.contentHandle} />
  //       <DateTimePicker />
  //     </View>
  //   </View>
  // );
  // reanimated node which holds position of bottom sheet's content (in dp)

  const renderMainInfo = () => (
    <View style={styles.myPlantContainer}>
      <Animated.View
        style={{
          alignItems: 'center',
          // transform: [{ rotate: rotateInterpolatedAnim }],
        }}>
        <Ionicons name="ios-arrow-down" size={24} color="grey" />
      </Animated.View>
      <View style={styles.reminderBtnContainer}>
        <DateTimePicker />
      </View>
      <ScrollView style={styles.plantInfoWrapper}>
        <View style={styles.smallContainer}>
          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <AntDesign style={styles.smallInfoIcon} name="warning" size={35} color="#006772" />
              <Text style={styles.infoHeader}>Poisonous</Text>
            </View>
            <Text style={styles.smallInfoBody}>Not poisonous for cats and dogs.</Text>
          </View>
          <View style={styles.smallInfoWrapper}>
            <View style={styles.smallInfoHeaderWrapper}>
              <Entypo style={styles.smallInfoIcon} name="tree" size={35} color="#006772" />
              <Text style={styles.infoHeader}>Growth</Text>
            </View>
            <Text style={styles.smallInfoBody}>10-20 cm</Text>
          </View>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoHeaderWrapper}>
            <Entypo name="drop" size={14} color="white" style={styles.waterDrop} />
            <Text style={styles.infoHeader}>Water</Text>
          </View>
          <Text style={styles.infoBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
            ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
          </Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoHeaderWrapper}>
            <Entypo name="light-up" size={20} color="white" />
            <Text style={styles.infoHeader}>Light</Text>
          </View>
          <Text style={styles.infoBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
            ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
          </Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoHeaderWrapper}>
            <MaterialCommunityIcons name="temperature-celsius" size={20} color="white" />
            <Text style={styles.infoHeader}>Temperature</Text>
          </View>
          <Text style={styles.infoBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam exercitationem
            ex ad, possimus sed? Sit accusamus rerum sapiente molestias laudantium.
          </Text>
        </View>
        <View style={styles.infoBtnContainer}>
          <PflanzyOpacity onPress={() => navigation.navigate('IndividualPlant')}>
            <View style={styles.infoBtn}>
              <Text style={styles.infoBtnTxt}>More info</Text>
            </View>
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
          // renderHeader={renderMainInfoHeader}
          initialSnap={0}
          // callbackNode={transArrow}
          enabledGestureInteraction
          // onOpenEnd={() => {
          //   console.log(rotateAnim);
          //   Animated.timing(rotateAnim, {
          //     toValue: 0,
          //     duration: 500,
          //   }).start();
          // }}
          // onCloseEnd={() => {
          //   console.log('fullyClosed');
          //   Animated.timing(rotateAnim, {
          //     toValue: 180,
          //     duration: 500,
          //   }).start();
          // }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  // arrowDown: {
  //   transform: [{ rotateX: '180deg' }],
  // },

  // arrowUp: {
  //   transform: [{ rotateX: '0deg' }],
  // },
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
    // alignSelf: 'flex-start',
    // position: 'absolute',
    // bottom: 0,
    // alignSelf: 'center',
    // width: '100%',
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
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
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
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  arrowContainer: {
    alignItems: 'center',
  },
  // arrow: {
  //   transform: [{ rotateX: '0deg' }],
  // },

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

  buttonWrapper: {
    width: '100%',
    marginTop: 30,
  },
  infoBtnContainer: {
    width: '100%',
    alignItems: 'center',
  },

  infoBtn: {
    width: 240,
    borderRadius: 50,
    backgroundColor: Colors.tintColor,
    padding: 10,
    marginBottom: 30,
    // alignItems: 'center',
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
    backgroundColor: Colors.tintColor,
    borderRadius: 15,
    width: '48%',
  },
  smallInfoIcon: {
    position: 'absolute',
  },

  smallInfoHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.darkGreen,
    paddingVertical: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  smallInfoBody: {
    textAlign: 'center',
    color: Colors.defaultWhite,
    paddingVertical: 15,
    paddingHorizontal: 5,
    // alignItems: 'center',
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
    backgroundColor: Colors.darkGreen,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexShrink: 1,
  },
  infoHeader: {
    fontSize: 20,
    color: Colors.defaultWhite,
    paddingHorizontal: 10,
  },
  infoBody: {
    lineHeight: 28,
    marginTop: 10,
    marginBottom: 25,
    // textAlign: 'center',
    // width: '95%',
    color: Colors.textGrey,
  },
});

export default MyGardenPlant;
