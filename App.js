import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import FlashMessage from 'react-native-flash-message';
import { MaterialIcons } from '@expo/vector-icons';
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
  console.disableYellowBox = true;
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
                <Stack.Screen name="Search" component={BottomTabNavigator} />
                <Stack.Screen
                  options={({ navigation }) => ({
                    headerTitle: false,
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    headerLeft: (props) => (
                      <HeaderBackButton
                        style={{
                          backgroundColor: Colors.settingsIconBg,
                          borderRadius: 17,
                          width: 35,
                          height: 35,
                          marginLeft: 10,
                          marginTop: 13,
                        }}
                        {...props}
                        onPress={() => {
                          navigation.goBack();
                        }}
                      />
                    ),
                  })}
                  name="Camera"
                  component={CameraScreen}
                />
                <Stack.Screen
                  options={({ navigation }) => ({
                    headerTitle: false,
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    headerLeft: (props) => (
                      <HeaderBackButton
                        style={{
                          backgroundColor: Colors.settingsIconBg,
                          borderRadius: 17,
                          width: 35,
                          height: 35,
                          marginLeft: 10,
                          marginTop: 13,
                        }}
                        {...props}
                        onPress={() => {
                          navigation.goBack();
                        }}
                      />
                    ),
                  })}
                  name="Plant Recognition"
                  component={PlantRecognitionScreen}
                />
                <Stack.Screen
                  name="IndividualPlant"
                  component={IndividualPlantScreen}
                  options={({ navigation }) => ({
                    headerTitle: false,
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    headerLeft: (props) => (
                      <HeaderBackButton
                        style={{
                          backgroundColor: Colors.settingsIconBg,
                          borderRadius: 17,
                          width: 35,
                          height: 35,
                          marginLeft: 10,
                          marginTop: 13,
                        }}
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
                  options={({ navigation }) => ({
                    headerTitle: false,
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    headerLeft: (props) => (
                      <HeaderBackButton
                        style={{
                          backgroundColor: Colors.settingsIconBg,
                          borderRadius: 17,
                          width: 35,
                          height: 35,
                          marginLeft: 10,
                          marginTop: 13,
                        }}
                        {...props}
                        onPress={() => {
                          navigation.goBack();
                        }}
                      />
                    ),
                  })}
                />
                <Stack.Screen
                  name="My Plant"
                  component={MyPlantScreen}
                  options={({ navigation }) => ({
                    headerTitle: false,
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    headerLeft: (props) => (
                      <HeaderBackButton
                        style={{
                          backgroundColor: Colors.settingsIconBg,
                          borderRadius: 17,
                          width: 35,
                          height: 35,
                          marginLeft: 10,
                          marginTop: 13,
                        }}
                        {...props}
                        onPress={() => {
                          navigation.goBack();
                        }}
                      />
                    ),
                  })}
                />
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
