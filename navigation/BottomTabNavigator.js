import { Button } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors'

import SearchScreen from '../screens/SearchScreen';
import MyGardenScreen from '../screens/MyGardenScreen';
import ExploreScreen from '../screens/ExploreScreen';
import TodayScreen from '../screens/TodayScreen';
import firebase from "firebase"


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Search';




export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerStyle:{
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: Colors.defaultWhite,
    headerRight: () => (
      <Button
        onPress={() => {
          const provider = new firebase.auth.GoogleAuthProvider()
          firebase.auth().signInWithRedirect(provider)
            firebase.auth().getRedirectResult().then(function (result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
            console.log(user)
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ... 
  console.log(error)
});
        }}
        title="Info"
        color="#fff"
      />
    ),
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{activeTintColor: Colors.tintColor}}
    
    >
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-search" />,
        
        }}
      />
      <BottomTab.Screen
        name="MyGarden"
        component={MyGardenScreen}
        options={{
          title: 'My Garden',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-leaf"/>,
        }}
      />
      <BottomTab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          title: 'Today Page',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-today" />,
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore Page',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-book"/>,
        }}
      />

    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  //route.state.routes[route.state.index].name.INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Search':
      return 'Search';
    case 'MyGarden':
      return 'My Garden';
    case 'Today':
      return 'Your tasks';
    case 'Explore':
      return 'Explore';
  }
}
