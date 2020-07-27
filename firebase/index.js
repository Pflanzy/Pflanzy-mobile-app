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
      .where('userID', '==', id)
      .onSnapshot((snapshot) => {
        const plants = [];
        snapshot.forEach((plant) => {
          plants.push({ ...plant.data(), id: plant.id });
        });
        dispatch({ type: 'UPDATE_PLANTS', payload: plants });
      });
  };
};
