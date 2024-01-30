/* eslint-disable no-unused-vars */
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDXl5iY_JtJIEXURS19e6Kh_olFXJMv-vM",
  authDomain: "disneyplus-hotstar-clone-2fdee.firebaseapp.com",
  projectId: "disneyplus-hotstar-clone-2fdee",
  storageBucket: "disneyplus-hotstar-clone-2fdee.appspot.com",
  messagingSenderId: "125551669476",
  appId: "1:125551669476:web:cf460f01b3bab80fb5fcf1"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;