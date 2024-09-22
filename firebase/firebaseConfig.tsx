// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAigNuPaBtLI2BSTRzpM48ROGCHUj08VYs",
  authDomain: "ders14firebasecihan.firebaseapp.com",
  projectId: "ders14firebasecihan",
  storageBucket: "ders14firebasecihan.appspot.com",
  messagingSenderId: "538564218878",
  appId: "1:538564218878:web:39c28adfde0ac1312efaaf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
