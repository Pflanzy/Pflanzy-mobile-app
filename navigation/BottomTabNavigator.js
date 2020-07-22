import { Button, TouchableOpacity, Text, StyleSheet } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors'

import SearchScreen from '../screens/SearchScreen';
import MyGardenScreen from '../screens/MyGardenScreen';
import ExploreScreen from '../screens/ExploreScreen';
import firebase from "firebase"
import  { signIn as SignInAnonymous, onAuthStateChanged } from '../firebase';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Root';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  const dispatch = useDispatch();
  useEffect(() => {
    SignInAnonymous()
      .then((response) => {
        const { uid } = response.user;
        const data = {
          id: uid,
          name: 'guest',
          plants: [],
          isAnonymous: true,
        };

        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            dispatch({ type: 'ADD_USER', payload: { user: data } });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
    onAuthStateChanged(function (user) {
      if (user) {
        // TODO: Save User Info To Redux
        // User is signed in.
        // ...
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }, []);
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerStyle:{
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: Colors.defaultWhite,
    headerRight: () => (
      <TouchableOpacity style={styles.signUpButton} onPress={() => { navigation.navigate('Auth')}}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>
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
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
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
    case 'Explore':
      return 'Explore';
  }
}

const styles = StyleSheet.create({
  signUpButton: {
    backgroundColor: Colors.darkGreen,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 15
  },
  signUpButtonText: {
    color: Colors.defaultWhite,
  }
})