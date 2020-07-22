import * as React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import BasicCard from '../components/BasicCard';

const MyGardenScreen = () => {
  const user = useSelector((state) => state);

  console.log(user);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text> My Garden Screen </Text>
        <BasicCard />
        <Text>{user.plants}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default MyGardenScreen;
