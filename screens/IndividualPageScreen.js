import { Entypo, AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
  ScrollView,
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
              <AntDesign name="calendar" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.contentBody}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus sint id quis quaerat consequatur facere optio facilis
              neque, possimus eligendi officia, quidem et nesciunt!
            </Text>
            <View style={styles.shortInfoContainer}>
              <View style={styles.shortInfoElement}>
                <Entypo
                  style={styles.shortInfoIcon}
                  name="globe"
                  size={80}
                  color="#006772"
                />
                <Text style={styles.shortInfoHeadline}>Origin:</Text>
                <Text style={styles.shortInfoText}>Africa</Text>
              </View>
              <View style={styles.shortInfoElement}>
                <Entypo
                  style={styles.shortInfoIcon}
                  name="price-tag"
                  size={80}
                  color="#006772"
                />
                <Text style={styles.shortInfoHeadline}>Category:</Text>
                <Text style={styles.shortInfoText}>Flowering plants</Text>
              </View>
              <View style={styles.shortInfoElement}>
                <Entypo
                  style={styles.shortInfoIcon}
                  name="tree"
                  size={80}
                  color="#006772"
                />
                <Text style={styles.shortInfoHeadline}>Growth:</Text>
                <Text style={styles.shortInfoText}>1,5-2 m</Text>
              </View>
              <View style={styles.shortInfoElement}>
                <AntDesign
                  style={styles.shortInfoIcon}
                  name="warning"
                  size={80}
                  color="#006772"
                />
                <Text style={styles.shortInfoHeadline}>Poisonous:</Text>
                <Text style={styles.shortInfoText}>Toxic to cats and dogs</Text>
              </View>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <MaterialCommunityIcons
                  name="temperature-celsius"
                  size={20}
                  color="white"
                />
                <Text style={styles.infoHeader}>Temperature</Text>
              </View>
              <Text style={styles.infoBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nam exercitationem ex ad, possimus sed? Sit accusamus
                rerum sapiente molestias laudantium.
              </Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <Entypo name="light-up" size={20} color="white" />
                <Text style={styles.infoHeader}>Light</Text>
              </View>
              <Text style={styles.infoBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nam exercitationem ex ad, possimus sed? Sit accusamus
                rerum sapiente molestias laudantium.
              </Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <Entypo
                  name="drop"
                  size={14}
                  color="white"
                  style={styles.waterDrop}
                />
                <Text style={styles.infoHeader}>Water</Text>
              </View>
              <Text style={styles.infoBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nam exercitationem ex ad, possimus sed? Sit accusamus
                rerum sapiente molestias laudantium.
              </Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <MaterialCommunityIcons name="pot" size={20} color="white" />
                <Text style={styles.infoHeader}>Soil</Text>
              </View>
              <Text style={styles.infoBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nam exercitationem ex ad, possimus sed? Sit accusamus
                rerum sapiente molestias laudantium.
              </Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <Entypo name="bucket" size={20} color="white" />
                <Text style={styles.infoHeader}>Re-Potting</Text>
              </View>
              <Text style={styles.infoBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nam exercitationem ex ad, possimus sed? Sit accusamus
                rerum sapiente molestias laudantium.
              </Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <MaterialCommunityIcons
                  name="spray-bottle"
                  size={20}
                  color="white"
                />
                <Text style={styles.infoHeader}>Fertilizer</Text>
              </View>
              <Text style={styles.infoBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nam exercitationem ex ad, possimus sed? Sit accusamus
                rerum sapiente molestias laudantium.
              </Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <Entypo name="water" size={20} color="white" />
                <Text style={styles.infoHeader}>Humidity</Text>
              </View>
              <Text style={styles.infoBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nam exercitationem ex ad, possimus sed? Sit accusamus
                rerum sapiente molestias laudantium.
              </Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoHeaderWrapper}>
                <FontAwesome5 name="seedling" size={20} color="white" />
                <Text style={styles.infoHeader}>Propagation</Text>
              </View>
              <Text style={styles.infoBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nam exercitationem ex ad, possimus sed? Sit accusamus
                rerum sapiente molestias laudantium.
              </Text>
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
        snapPoints={['85%', '39%', '17%']}
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
    height: '95%',
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
    width: '100%',
    flex: 1,
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
    alignItems: 'flex-start',
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
    borderWidth: 2,
    borderColor: '#79C3CA',
  },
  btnCalendar: {
    backgroundColor: '#004e57',
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
    color: 'white',
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
    backgroundColor: '#004e57',
    height: 120,
    borderRadius: 10,
    margin: 10,
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
    backgroundColor: '#004e57',
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
});
