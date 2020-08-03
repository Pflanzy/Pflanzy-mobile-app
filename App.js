import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import FlashMessage from 'react-native-flash-message';
import store from './store';
import Colors from './constants/Colors';
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CameraScreen from './screens/CameraScreen';
import MyPlantScreen from './screens/MyPlantScreen';
import IndividualPlantScreen from './screens/IndividualPlantScreen';
import IndividualArticle from './components/IndividualArticle';
import PlantRecognitionScreen from './screens/PlantRecognitionScreen';
import AuthScreen from './screens/AuthScreen';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Stack = createStackNavigator();

export default function App() {
  // const isLoadingComplete = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <AppearanceProvider>
          <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: { backgroundColor: Colors.tintColor },
                  headerTitleAlign: 'center',
                  headerTintColor: Colors.defaultWhite,
                }}>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
                <Stack.Screen name="Camera" component={CameraScreen} />
                <Stack.Screen name="PlantRecognition" component={PlantRecognitionScreen} />
                <Stack.Screen
                  name="IndividualPlant"
                  component={IndividualPlantScreen}
                  options={({ navigation }) => ({
                    headerLeft: (props) => (
                      <HeaderBackButton
                        {...props}
                        onPress={() => {
                          navigation.navigate('Search');
                        }}
                      />
                    ),
                  })}
                />
                <Stack.Screen
                  name="IndividualArticle"
                  component={IndividualArticle}
                  options={({ route }) => ({ title: route.params.article.label })}
                />
                <Stack.Screen name="My Plant" component={MyPlantScreen} />
                <Stack.Screen name="Auth" component={AuthScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </AppearanceProvider>
        <StatusBar style="auto" />
      </View>
      <FlashMessage position="top" />
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
