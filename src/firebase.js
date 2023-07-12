// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArwZp4zAxVWjdWlh6F-25sw29gk059HWo",
  authDomain: "scout-network.firebaseapp.com",
  projectId: "scout-network",
  storageBucket: "scout-network.appspot.com",
  messagingSenderId: "174999257987",
  appId: "1:174999257987:web:2c289255384a2664826cb6",
  measurementId: "G-XR7L0WD5VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);