import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import store from './store';
import Colors from './constants/Colors';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CameraScreen from './screens/CameraScreen';
import DailyTasksScreen from './screens/DailyTasksScreen';
import IndividualPageScreen from './screens/IndividualPageScreen';
import IndividualArticle from './components/IndividualArticle';
import AuthScreen from './screens/AuthScreen';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import { signIn as SignInAnonymous, onAuthStateChanged } from './firebase';

const Stack = createStackNavigator();

export default function App(props) {
  // const isLoadingComplete = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {

  useEffect(() => {
    SignInAnonymous();
    onAuthStateChanged(function (user) {
      if (user) {
        // TODO: Save User Info To Redux
        // User is signed in.
        const { isAnonymous } = user;
        const { uid } = user;
        console.log(uid);
        // ...
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: Colors.tintColor },
                headerTintColor: Colors.defaultWhite,
              }}>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
              <Stack.Screen name="Camera" component={CameraScreen} />
              <Stack.Screen name="DailyTasks" component={DailyTasksScreen} />
              <Stack.Screen name="IndividualPlantPage" component={IndividualPageScreen} />
              <Stack.Screen name="IndividualArticle" component={IndividualArticle} />
              <Stack.Screen name="Auth" component={AuthScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
// }

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: Colors.tintColor,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.defaultWhite,
  },
});
