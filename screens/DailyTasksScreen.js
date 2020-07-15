import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native';

const myDate = new Date();
let myDateString;
myDate.setDate(myDate.getDate());
myDateString = ('0' + myDate.getDate()).slice(-2) + '.' + ('0' + (myDate.getMonth() + 1)).slice(-2) + '.' + myDate.getFullYear();


const DailyTask = (props) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.dailyTaskContainer}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/200',
          }}
          />
      </View>
        <Text style={styles.date}>{myDateString}</Text>
      <Text style={styles.header}>Relevant information for</Text>
      <View style={styles.plantNameWrapper}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('IndividualPlantPage')}>>
          <Text style={styles.plantName}>Swiss Cheese Plant</Text>
        </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('IndividualPlantPage')}>
        <View style={styles.plantName} >
          <Text style={styles.plantName}>Swiss Cheese Plant</Text>
        </View>
      </TouchableOpacity>
      </View>

      <View style={styles.plantInfoWrapper}>
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
      </View>
    </ScrollView>
  );
  };


  const styles = StyleSheet.create({
    dailyTaskContainer: {
      display: 'flex',
      height: '100%',
    },
    image: {
      width: '100%',
      height: 300,
    },
    header: {
      color: Colors.defaultWhite,
      fontSize: 24,
      textAlign: 'center',
      backgroundColor: Colors.darkGreen,
      paddingTop: 15,

    },
    plantNameWrapper: {
      backgroundColor: Colors.darkGreen,
      display: 'flex',
      alignItems: 'center',
      paddingBottom: 10, 
    },
    plantName: {
      paddingHorizontal: 10,
      fontSize: 16,
      backgroundColor: Colors.tintColor,
      color: Colors.defaultWhite,
      margin: 10,
      borderRadius: 10,
      overflow: 'hidden',
      fontWeight: '600',
    },
    date: {
      padding: 5,
      backgroundColor: Colors.tintColor,
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '600',
    },
    plantInfoWrapper: {
      margin: 30,
    },
    infoWrapper: {
      display: 'flex',
      alignItems: 'center',
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
      marginLeft: 10,
    },
    infoBody: {
      lineHeight: 28,
      marginTop: 10,
      marginBottom: 25,
      textAlign: 'center',
      width: '95%',
      color: Colors.textGrey
    },
  });

export default DailyTask;
