import { Entypo, AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const IndividualPage = () => {
  const renderContent = () => {
    return (
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <View>
            <Text style={styles.nameGeneric}>Name (Generic)</Text>
            <Text style={styles.nameScientific}>Name (Scientific)</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnReminder}>
              <Entypo
                name="drop"
                size={14}
                color="white"
                style={styles.waterDrop}
              />
              <Text style={styles.btnText}>Set care reminder</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCalendar}>
              <AntDesign name="calendar" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus sint id quis quaerat consequatur facere optio facilis
              neque, possimus eligendi officia, quidem et nesciunt!
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const bs = React.createRef();

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[750, 300, 100]}
        initialSnap={1}
        renderContent={renderContent}
      />
      <TouchableWithoutFeedback onPress={() => bs.current.snapTo(0)}>
        <Image
          style={styles.background}
          source={require('../assets/images/TEST-flower-02.jpg')}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default IndividualPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  background: {
    height: '100%',
    width: '100%',
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
  },
  content: {
    backgroundColor: '#008080',
    borderTopRightRadius: 80,
    padding: 20,
    height: 300,
    width: '100%',
    flex: 1,
    zIndex: 100,
  },
  nameGeneric: {
    color: 'white',
    fontSize: 26,
    marginBottom: 10,
  },
  nameScientific: {
    color: 'white',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnReminder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004e57',
    width: 240,
    padding: 10,
    marginBottom: 20,
    borderRadius: 50,
  },
  btnCalendar: {
    backgroundColor: '#004e57',
    borderRadius: 50,
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 6,
  },
  text: {
    color: 'white',
    lineHeight: 28,
    marginBottom: 20,
  },
});
