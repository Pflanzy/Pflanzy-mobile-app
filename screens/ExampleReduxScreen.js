import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const TodayScreen = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text> Redux Example </Text>
      <Text>{(user && user.name) || 'No User'}</Text>
      <Button
        title="Login Fake User"
        onPress={() => {
          dispatch({ type: 'LOGIN', payload: { name: 'Fake Philipp' } });
        }}
      />
      <Button
        title="Logout Fake User"
        onPress={() => {
          dispatch({ type: 'LOGOUT', payload: { name: 'Fake Philipp' } });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodayScreen;
