import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DailyTask = (props) => {
  const styles = StyleSheet.create({
    dailyTaskContainer: {
      display: 'flex',
      height: '100%',
    },
    image: {
      width: '100%',
      height: 300,
    },
    detailCard: {
      alignItems: 'center',
      margin: 10,
    },
    taskHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      padding: 10,
    },
    iconContainer: {
borderColor:"black",
borderWidth:1
    },
    taskName: {
      justifyContent: 'space-evenly',
    },
    taskBody: {
      borderRadius: 10,
      padding: 10,
    },
    taskExtra: {
      margin: 10,
    },
  });
  return (
    <ScrollView style={styles.dailyTaskContainer}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/200',
          }}
        />
        <View style={styles.detailCard}>
          <View style={styles.taskHeader}>
            <View style={styles.iconContainer}>
              <Icon name="water" size={30} color="green" />
              <Text>Care</Text>
              <Text>Low</Text>
            </View>
            <View style={styles.iconContainer}>
              <MaterialIcon name="flower" size={30} color="green" />
              <Text>Water</Text>
              <Text>Every 2-3 weeks</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="ios-sunny" size={30} color="green" />
              <Text>Sun</Text>
              <Text>Full sun</Text>
            </View>
          </View>
          <View style={styles.taskExtra}>
            <Text>
              Extra Information Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Porro laboriosam ad officiis quaerat mollitia
              ullam quidem cumque odit corrupti odio, quibusdam itaque, quo sit
              recusandae quod a aperiam natus ratione, quisquam animi beatae
              dolor expedita aliquid veniam? Necessitatibus laudantium et autem
              incidunt suscipit. Laborum ipsa voluptatibus inventore nisi
              tempore fugit?
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DailyTask;
