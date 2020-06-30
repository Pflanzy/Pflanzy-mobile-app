import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import BasicCard from '../components/BasicCard';

const MyGardenScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
      </View>
    </ScrollView>
  );
};

export default MyGardenScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
