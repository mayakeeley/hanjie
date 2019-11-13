import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_FT-2Vrz0MA1HXLOIlkdtk4V6IxbN0f0",
  authDomain: "hanjie-689e0.firebaseapp.com",
  databaseURL: "https://hanjie-689e0.firebaseio.com",
  projectId: "hanjie-689e0",
  storageBucket: "hanjie-689e0.appspot.com",
  messagingSenderId: "954193546574",
  appId: "1:954193546574:web:5b99f61140714c3e44a21f",
  measurementId: "G-C2QLH6QS11"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
