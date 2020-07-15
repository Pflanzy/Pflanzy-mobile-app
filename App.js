import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CameraScreen from './screens/CameraScreen';
import DailyTasksScreen from './screens/DailyTasksScreen';
import IndividualPageScreen from './screens/IndividualPageScreen';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import FirebaseExample from './screens/FireBaseExample';

const Stack = createStackNavigator();

export default function App(props) {
  // const isLoadingComplete = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content" />
      <FirebaseExample />
    </>
  );

  // return (
  //   <>
  //     <SafeAreaView style={styles.safeAreaTop} />
  //     <StatusBar barStyle="light-content" />
  //     <View style={styles.container}>
  //       <NavigationContainer>
  //         <Stack.Navigator
  //           screenOptions={{
  //             headerStyle: { backgroundColor: '#008080' },
  //             headerTintColor: '#fff',
  //           }}>
  //           <Stack.Screen name="Root" component={BottomTabNavigator} />
  //           <Stack.Screen name="Camera" component={CameraScreen} />
  //           <Stack.Screen name="DailyTasks" component={DailyTasksScreen} />
  //           <Stack.Screen name="IndividualPlantPage" component={IndividualPageScreen} />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //       <StatusBar style="auto" />
  //     </View>
  //   </>
  // );
}
// }

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    // height: 50,
    backgroundColor: '#008080',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
