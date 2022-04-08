import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getFireStore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);


// Initialize Firestore
export const db = firebase.firestore(app);

export const fstore = firebase.firestore;