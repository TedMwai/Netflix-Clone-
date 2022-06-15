// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAVAmdcfncWWLxS8L58DCiHSBcMRRKgsE",
  authDomain: "netflix-clone-92df6.firebaseapp.com",
  projectId: "netflix-clone-92df6",
  storageBucket: "netflix-clone-92df6.appspot.com",
  messagingSenderId: "380174631956",
  appId: "1:380174631956:web:c7481221e387df35ae5301",
  measurementId: "G-9YZW6ET1BM",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
