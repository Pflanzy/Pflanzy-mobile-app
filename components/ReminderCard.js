import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReminderCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('DailyTasks')}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.cardImage}
          source={{ uri: 'https://picsum.photos/seed/picsum/200/200' }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>UserPlantName</Text>
          <Text style={styles.text}>Scientific name which can be pretty long</Text>
        </View>
        <View style={styles.passedContent}>
          <Text style={styles.title}>Today:</Text>
          <Text style={styles.text}>passed prop</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 100,
    width: '92%',
    elevation: 3,
    shadowColor: '#404040',
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    marginVertical: 10,
  },
  imageContainer: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: '30%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 15,
  },
  nameContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  passedContent: {
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 17,
    fontWeight: '200',
    marginBottom: 3,
    width: 120,
  },
  text: {
    fontWeight: '200',
    fontSize: 12,
    width: 120,
  },
});
export default ReminderCard;
