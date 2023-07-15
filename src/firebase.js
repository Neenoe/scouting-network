// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();