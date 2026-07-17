// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBELMgdgyS8--ace6p1zTHSmtyEGWuqlkI",
  authDomain: "classichess-cd309.firebaseapp.com",
  projectId: "classichess-cd309",
  storageBucket: "classichess-cd309.firebasestorage.app",
  messagingSenderId: "752890385329",
  appId: "1:752890385329:web:aed236617ea63faab86390",
  measurementId: "G-LTLYQP5DEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
