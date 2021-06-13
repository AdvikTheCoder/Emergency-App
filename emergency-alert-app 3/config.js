import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxi9LgIkuGAftMWZ67TDJp8582sGNELDA",
  authDomain: "emergency-alert-app-f2dc1.firebaseapp.com",
  projectId: "emergency-alert-app-f2dc1",
  storageBucket: "emergency-alert-app-f2dc1.appspot.com",
  messagingSenderId: "618498438964",
  appId: "1:618498438964:web:e972b1248b1bab6b971761",
  measurementId: "G-5CJLWXY0R4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
