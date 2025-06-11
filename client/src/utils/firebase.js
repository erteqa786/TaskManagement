// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-by-erteqa.firebaseapp.com",
  projectId: "taskmanager-by-erteqa",
  storageBucket: "taskmanager-by-erteqa.firebasestorage.app",
  messagingSenderId: "659889500739",
  appId: "1:659889500739:web:e7554b7a17ebe509f1daf6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);