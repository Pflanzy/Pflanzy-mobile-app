import firebase from './config';

export default firebase;

export const signIn = () => {
  return firebase.auth().signInAnonymously();
};

export const signOut = () => {
  return firebase.auth().signOut();
};
