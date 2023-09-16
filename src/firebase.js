/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDacCMh0IFhFZmDs8uTseuLwMcXs7RZDV8",
  authDomain: "urpr-e74ab.firebaseapp.com",
  projectId: "urpr-e74ab",
  storageBucket: "urpr-e74ab.appspot.com",
  messagingSenderId: "683963509393",
  appId: "1:683963509393:web:df5fc02c58dc08f99ead30",
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const storage = getStorage();
 export const db = getFirestore(app) ;
 

 