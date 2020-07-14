import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBXgsXNuvScz2WhJYGh6XdWVnL1w5fSCaI',
  authDomain: 'pflanzy-mobile-app.firebaseapp.com',
  databaseURL: 'https://pflanzy-mobile-app.firebaseio.com',
  projectId: 'pflanzy-mobile-app',
  storageBucket: 'pflanzy-mobile-app.appspot.com',
  messagingSenderId: '780877043159',
  appId: '1:780877043159:web:8ce33b6cfe7a5cd9eae792',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

{
    provider: "facebook | google | twitter | microsoft.com",
    type: "popup | redirect", // popup is default
    scopes: Array // email is default
  }