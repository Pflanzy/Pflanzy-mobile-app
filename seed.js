const firebase = require('firebase');

var firebaseConfig = {
  apiKey: "AIzaSyBYNHUcL0xX5g8wq2NghtK5kXRQzCidZqY",
  authDomain: "pflanzy-dummy-data.firebaseapp.com",
  databaseURL: "https://pflanzy-dummy-data.firebaseio.com",
  projectId: "pflanzy-dummy-data",
  storageBucket: "pflanzy-dummy-data.appspot.com",
  messagingSenderId: "839394745708",
  appId: "1:839394745708:web:48ba429577b13a112fa749"
};

const db = firebase.initializeApp(firebaseConfig);

const data = require('./data/data.json');

data.map((plant) => {
  const plantsRef = db.firestore().collection('plants');

  return plantsRef.add(plant);
});
