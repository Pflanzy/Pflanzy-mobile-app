const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyBXgsXNuvScz2WhJYGh6XdWVnL1w5fSCaI',
  authDomain: 'pflanzy-mobile-app.firebaseapp.com',
  databaseURL: 'https://pflanzy-mobile-app.firebaseio.com',
  projectId: 'pflanzy-mobile-app',
  storageBucket: 'pflanzy-mobile-app.appspot.com',
  messagingSenderId: '780877043159',
  appId: '1:780877043159:web:8ce33b6cfe7a5cd9eae792',
};

const db = firebase.initializeApp(firebaseConfig);

const data = require('./data/data.json');

data.map((plant) => {
  const plantsRef = db.firestore().collection('plants');

  return plantsRef.add(plant);
});
