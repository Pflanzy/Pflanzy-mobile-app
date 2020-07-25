import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '../firebase';
import { formValidation } from '../helpers/formValidation';

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displaySignup, setDisplaySignup] = useState(false);

  const onFooterLinkPress = () => {
    setDisplaySignup(!displaySignup);
  };

  const buttonPress = (isSignUp) => {
    return isSignUp ? signupHandler() : signinHandler();
  };

  const authFooterText = (isSignUp) => {
    return (
      <>
        {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
        <Text onPress={onFooterLinkPress} style={styles.footerLink}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </Text>
      </>
    );
  };

  const signinHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const { uid } = response.user;
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert('User does not exist anymore.');
              return;
            }
            const user = firestoreDocument.data();
            dispatch({ type: 'ADD_USER', payload: { user } });
            navigation.navigate('Root');
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
       formValidation(error,password,email)
      });
  };

  const signupHandler = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const { uid } = response.user;
        const data = {
          id: uid,
          email,
          fullName,
        };
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Root');
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        formValidation(error,password,email,fullName)
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        {/* <Image style={styles.logo} source={require()} /> */}
        {displaySignup && (
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        {displaySignup && (
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Confirm Password"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => buttonPress(displaySignup)}>
          <Text style={styles.buttonTitle}>
            {displaySignup ? 'SIGN UP' : 'SIGN IN'}
          </Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>{authFooterText(displaySignup)}</Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#788eec',
    fontSize: 16,
  },
});

export default AuthScreen;
