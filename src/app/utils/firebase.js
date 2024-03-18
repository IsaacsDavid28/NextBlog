// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "late-stage-evolution.firebaseapp.com",
  projectId: "late-stage-evolution",
  storageBucket: "late-stage-evolution.appspot.com",
  messagingSenderId: "366096285719",
  appId: "1:366096285719:web:74df23f4017e2824045c52",
  measurementId: "G-BEZMRNQJVW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);