import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const reminder = () => {
  console.log('reminder');
};

const DailyTask = (props) => {
  const navigation = useNavigation();

  const renderInner = () => (
    <View style={styles.settingsContainer}>
      <TouchableOpacity style={styles.settingsBtns} onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.settingsBtnTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsBtns}>
        <Text style={styles.settingsBtnTitle}>Rename Plant</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteSettingsBtns}>
        <Text style={styles.settingsBtnDelete}>Delete Plant</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.CancelSettingsBtns} onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.settingsBtnTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.settingsHandleContainer}>
      <View style={styles.settingsHeader}>
        <View style={styles.settingsHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <>
      <BottomSheet
        ref={bs}
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
          backgroundColor: '#f0fff5',
          opacity: Animated.add(0.4, Animated.multiply(fall, 1.0)),
        }}>
        <TouchableOpacity style={styles.plantSettings} onPress={() => bs.current.snapTo(0)}>
          <Entypo name="dots-three-vertical" size={25} color="#e0ebe2" />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
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
        </View>

        <ScrollView style={styles.dailyTaskContainer}>
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity onPress={reminder}>
              <View style={styles.plantReminder}>
                <Text style={styles.plantReminder}>Set Reminder</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('IndividualPlantPage')}>
              <View style={styles.moreInfo}>
                <Text style={styles.moreInfo}>More info</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.plantInfoWrapper}>
            <View style={styles.smallContainer}>
              <View style={styles.smallInfoWrapper}>
                <View style={styles.smallInfoHeaderWrapper}>
                  <AntDesign
                    style={styles.smallInfoIcon}
                    name="warning"
                    size={35}
                    color="#006772"
                  />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam
                exercitationem ex ad, possimus sed? Sit accusamus rerum sapiente molestias
                laudantium.
              </Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <Entypo name="light-up" size={20} color="white" />
                <Text style={styles.infoHeader}>Light</Text>
              </View>
              <Text style={styles.infoBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam
                exercitationem ex ad, possimus sed? Sit accusamus rerum sapiente molestias
                laudantium.
              </Text>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  // mainContainer: {
  //   height: '100%',
  //   backgroundColor: '#f0fff5',
  //   opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
  // },

  settingsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    height: '100%',
    // alignItems: 'center',
  },

  settingsBtns: {
    borderRadius: 10,
    backgroundColor: Colors.tintColor,
    margin: 5,
  },

  settingsBtnTitle: {
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
    color: Colors.defaultWhite,
    fontWeight: '600',
  },

  deleteSettingsBtns: {
    borderRadius: 10,
    backgroundColor: '#c7c5c4',
    margin: 5,
  },

  settingsBtnDelete: {
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
    color: '#c4392d',
    fontWeight: '600',
  },

  CancelSettingsBtns: {
    borderRadius: 10,
    backgroundColor: Colors.tintColor,
    margin: 5,
    marginTop: 40,
  },

  settingsHandleContainer: {
    backgroundColor: Colors.defaultWhite,
    shadowColor: '#333',
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

  dailyTaskContainer: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 10,
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
  },
  botNameInner: {
    marginLeft: 5,
    fontWeight: '400',
  },

  buttonsWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  moreInfo: {
    paddingHorizontal: 5,
    fontSize: 16,
    backgroundColor: Colors.tintColor,
    color: Colors.defaultWhite,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: '600',
  },
  plantReminder: {
    paddingHorizontal: 25,
    fontSize: 16,
    backgroundColor: Colors.tintColor,
    color: Colors.defaultWhite,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: '600',
  },

  plantInfoWrapper: {
    // padding: 20,
  },
  infoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  smallContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    // borderWidth: 1,
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
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  smallInfoBody: {
    textAlign: 'center',
    color: Colors.textGrey,
    margin: 5,
  },

  infoHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.darkGreen,
    paddingVertical: 10,
    borderRadius: 5,
    flexShrink: 1,
  },
  infoHeader: {
    fontSize: 20,
    color: 'white',
    // marginLeft: 10,
  },
  infoBody: {
    lineHeight: 28,
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center',
    width: '95%',
    color: Colors.textGrey,
  },
});

export default DailyTask;
