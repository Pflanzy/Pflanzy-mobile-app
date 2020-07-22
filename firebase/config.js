import * as firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBYNHUcL0xX5g8wq2NghtK5kXRQzCidZqY",
  authDomain: "pflanzy-dummy-data.firebaseapp.com",
  databaseURL: "https://pflanzy-dummy-data.firebaseio.com",
  projectId: "pflanzy-dummy-data",
  storageBucket: "pflanzy-dummy-data.appspot.com",
  messagingSenderId: "839394745708",
  appId: "1:839394745708:web:48ba429577b13a112fa749"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
