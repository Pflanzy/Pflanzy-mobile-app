import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  Platform,
  Modal,
  T,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import BasicCard from '../components/BasicCard';
import Colors from '../constants/Colors';
import background from '../assets/images/plant-background-3.jpg';
import PflanzyOpacity from '../components/PflanzyOpacity';
import SearchFieldModal from '../components/SearchFieldModal';
import plantData from '../data/data.json';

const MyGardenScreen = ({ navigation }) => {
  const plants = useSelector((state) => state.userReducer.plants);

  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.modalReducer.open);

  const bsSettings = React.createRef();
  const fall = new Animated.Value(1);

  const NeuMorph = ({ children }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>{children}</View>
      </View>
    );
  };

  const renderHeader = () => (
    <View style={styles.settingsHandleContainer}>
      <View style={styles.settingsHeader}>
        <View style={styles.settingsHandle} />
      </View>
    </View>
  );

  const addPlantSettings = () => (
    <View style={styles.settingsContainer}>
      <PflanzyOpacity
        style={styles.settingsBtns}
        onPress={() => {
          navigation.navigate('PlantRecognition');
          bsSettings.current.snapTo(1);
        }}>
        <Text style={styles.settingsBtnTitle}>Snap to Identify</Text>
      </PflanzyOpacity>
      <PflanzyOpacity
        style={styles.settingsBtns}
        onPress={() => {
          dispatch({ type: 'TOGGLE' });
          bsSettings.current.snapTo(1);
        }}>
        <Text style={styles.settingsBtnTitle}>Search by name</Text>
      </PflanzyOpacity>

      <PflanzyOpacity style={styles.cancelSettingsBtn} onPress={() => bsSettings.current.snapTo(1)}>
        <Text style={styles.settingsBtnTitle}>Cancel</Text>
      </PflanzyOpacity>
    </View>
  );

  return (
    <>
      <BottomSheet
        ref={bsSettings}
        snapPoints={[230, 0]}
        renderContent={addPlantSettings}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction
      />
      <Animated.View
        style={{ minHeight: '100%', opacity: Animated.add(0.4, Animated.multiply(fall, 1.0)) }}>
        <Modal visible={modalVisible} animationType="slide">
          <SearchFieldModal plantData={plantData} dispatch={dispatch} />
        </Modal>
        <ImageBackground source={background} style={styles.background} />
        {plants?.length > 0 ? (
          <ScrollView contentContainerStyle={styles.wrapperWhenPlants}>
            <PflanzyOpacity onPress={() => bsSettings.current.snapTo(0)}>
              <NeuMorph>
                <View style={{ alignSelf: 'flex-end', marginTop: 15, marginRight: 15 }}>
                  <LinearGradient
                    colors={[Colors.darkGreen, Colors.darkGreen, Colors.darkGreen]}
                    start={[0.0, 0.0]}
                    end={[1.0, 1.0]}
                    style={{ width: 180, borderRadius: 17, padding: 10, elevation: 3 }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        color: Colors.defaultWhite,
                        fontWeight: '600',
                      }}>
                      Add Plant
                    </Text>
                  </LinearGradient>
                </View>
              </NeuMorph>
            </PflanzyOpacity>
            <View style={styles.container}>
              {plants.map((plant) => {
                return <BasicCard plant={plant} key={plant.id} />;
              })}
            </View>
          </ScrollView>
        ) : (
          <View style={styles.wrapperWhenNoPlants}>
            <PflanzyOpacity onPress={() => bsSettings.current.snapTo(0)}>
              <NeuMorph>
                <View
                  style={{
                    alignSelf: 'flex-end',
                    position: 'relative',
                    top: Platform.OS === 'ios' ? -50 : 0,
                    right: 15,
                  }}>
                  <LinearGradient
                    colors={[Colors.darkGreen, Colors.darkGreen, Colors.darkGreen]}
                    start={[0.0, 0.0]}
                    end={[1.0, 1.0]}
                    style={{ width: 180, borderRadius: 17, padding: 10, elevation: 3 }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        color: Colors.defaultWhite,
                        fontWeight: '600',
                      }}>
                      Add Plant
                    </Text>
                  </LinearGradient>
                </View>
              </NeuMorph>
            </PflanzyOpacity>
            <Image
              source={{
                uri:
                  'https://media1.tenor.com/images/22e52165d824572fa4ece1ee968aa6f6/tenor.gif?itemid=16288922',
              }}
              style={styles.plantsIconIcon}
            />
            <Text style={styles.errorMsg}>There are no plants in your garden yet.</Text>
          </View>
        )}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  // opacityContainer: {
  //   backgroundColor: Colors.settingsBgOpacity,
  // },

  topShadow: {
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: Colors.neoTopShadow,
  },

  bottomShadow: {
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowColor: Colors.neoBtmShadow,
  },

  // bottom sheet settings styles

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

  cancelSettingsBtn: {
    borderRadius: 10,
    backgroundColor: Colors.settingsCancelBtn,
    marginHorizontal: 5,
    marginVertical: 3,
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

  // ======================

  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  wrapperWhenNoPlants: {
    justifyContent: 'center',
    minHeight: '100%',
    // alignItems: 'center',
    backgroundColor: Colors.lightPink,
  },
  plantsIconIcon: {
    height: 350,
    width: 350,
    marginBottom: 10,
    alignSelf: 'center',
  },
  errorMsg: {
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 0,
    opacity: 0.8,
  },
});

export default MyGardenScreen;
