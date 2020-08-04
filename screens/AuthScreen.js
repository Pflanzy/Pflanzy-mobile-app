import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase, { onAuthStateChanged, updateUser } from '../firebase';
import { signInValidation, signUpValidation } from '../helpers/formValidation';
import visibleIcon from '../assets/images/visible.png';
import invisibleIcon from '../assets/images/invisible.png';
import Colors from '../constants/Colors';

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displaySignup, setDisplaySignup] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
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
            navigation.navigate('Root');
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        signInValidation(error, password, email);
      });
  };

  const signupHandler = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    const credential = firebase.auth.EmailAuthProvider.credential(email, password);

    onAuthStateChanged((currentUser) => {
      currentUser.linkAndRetrieveDataWithCredential(credential).then(
        function (usercred) {
          const { user } = usercred;

          console.log(user);
          const data = {
            fullName,
            email,
            isAnonymous: false,
          };
          const usersRef = firebase.firestore().collection('users');
          usersRef
            .doc(user.uid)
            .update(data)
            .then(() => {
              dispatch({ type: 'ADD_USER', payload: { user: data } });
              dispatch(updateUser(user.uid));
              navigation.navigate('MyGarden', { userData: data });
            })
            .catch((error) => {
              signUpValidation(error, password, email, fullName);
            });
        },
        function (error) {
          console.log('Error upgrading anonymous account', error);
        }
      );
    });

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     const { uid } = response.user;
    //     const data = {
    //       id: uid,
    //       email,
    //       fullName,
    //     };
    //     const usersRef = firebase.firestore().collection('users');
    //     usersRef
    //       .doc(uid)
    //       .set(data)
    //       .then(() => {
    //         navigation.navigate('Root');
    //       })
    //       .catch((error) => {
    //         alert(error);
    //       });
    //   })
    //   .catch((error) => {
    //     signUpValidation(error, password, email, fullName);
    //   });
  };

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmVisibility = () => {
    setConfirmVisible(!confirmVisible);
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="always">
        {/* <Image style={styles.logo} source={require()} /> */}
        {displaySignup && (
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor={Colors.placeHolderColor}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor={Colors.placeHolderColor}
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={Colors.placeHolderColor}
            secureTextEntry={!passwordVisible}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={toggleVisibility}>
            <Image source={passwordVisible ? visibleIcon : invisibleIcon} style={styles.btnImage} />
          </TouchableOpacity>
        </View>
        {displaySignup && (
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.placeHolderColor}
              secureTextEntry={!confirmVisible}
              placeholder="Confirm Password"
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.visibilityBtn}
              onPress={toggleConfirmVisibility}>
              <Image
                source={confirmVisible ? visibleIcon : invisibleIcon}
                style={styles.btnImage}
              />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={() => buttonPress(displaySignup)}>
          <Text style={styles.buttonTitle}>{displaySignup ? 'SIGN UP' : 'SIGN IN'}</Text>
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
  contentContainer: {
    marginTop: 20,
  },
  // logo: {
  //   flex: 1,
  //   height: 120,
  //   width: 90,
  //   alignSelf: 'center',
  //   margin: 30,
  // },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: Colors.defaultWhite,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: Colors.tintColor,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: Colors.defaultWhite,
    fontSize: 16,
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: Colors.authFooterTxt,
  },
  footerLink: {
    color: Colors.tintColor,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
    alignSelf: 'stretch',
  },
  btnImage: {
    position: 'absolute',
    right: 35,
    width: 30,
    resizeMode: 'contain',
  },
  visibilityBtn: {
    position: 'absolute',
    top: -12,
    right: 3,
    height: 70,
    width: 35,
  },
});

export default AuthScreen;
