import firebase from './config';

export default firebase;

export const signInAnonymous = () => {
  return firebase.auth().signInAnonymously();
};

export const signOut = () => {
  return firebase.auth().signOut();
};

export const onAuthStateChanged = (cb) => {
  firebase.auth().onAuthStateChanged(cb);
};

export const updateUser = (id) => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection('plants')
      .doc(id)
      .onSnapshot((snapshot) => {
        dispatch({ type: 'UPDATE_USER', payload: snapshot.data() });
      });
  };
};
