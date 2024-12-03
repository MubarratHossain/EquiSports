// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6HPbdIt76hP_zJXlT4Ri2WFwLORkr7fY",
  authDomain: "equisports-d27b8.firebaseapp.com",
  projectId: "equisports-d27b8",
  storageBucket: "equisports-d27b8.firebasestorage.app",
  messagingSenderId: "890492929717",
  appId: "1:890492929717:web:7899a72dbbb859f9b560fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);