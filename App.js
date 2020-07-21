import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import Colors from './constants/Colors'

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CameraScreen from './screens/CameraScreen';
import DailyTaskScreen from './screens/DailyTaskScreen';
import IndividualPageScreen from './screens/IndividualPageScreen';
import IndividualArticle from './components/IndividualArticle';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Stack = createStackNavigator();

export default function App(params) {
  // const isLoadingComplete = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  return (
<React.Fragment>
    <SafeAreaView style={styles.safeAreaTop}/>
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: Colors.tintColor}, headerTintColor: Colors.defaultWhite}}>
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="DailyTask" component={DailyTaskScreen} />
          <Stack.Screen name="IndividualPlantPage" component={IndividualPageScreen} />
          <Stack.Screen name="IndividualArticle" component={IndividualArticle} options={({route}) => ({title: route.params.article.label})}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
</React.Fragment>
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
