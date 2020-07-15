import * as React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import firebase, { signIn, signOut } from '../firebase';

const AuthTestScreen = () => {
  const [userId, setUserId] = React.useState('');

  console.log(firebase.auth().currentUser && firebase.auth().currentUser.uid);

  return (
    <View style={styles.container}>
      <Text>User: {userId}</Text>
      <Button
        onPress={async () => {
          signIn().then(({ user }) => {
            setUserId(user.uid);
          });
        }}
        title="Sign in"
      />

      <Button
        onPress={async () => {
          signOut().then(() => {
            setUserId('');
          });
        }}
        title="Sign Out"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AuthTestScreen;
