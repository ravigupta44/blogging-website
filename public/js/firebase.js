//import { initializeApp } from "firebase/app";

let firebaseConfig = {
  // Enter your firebase credentials
  apiKey: "AIzaSyBV9BoFeqeJJscz7-GfyUvL5lS3rVu2cTo",
  authDomain: "blogging-website-5edb1.firebaseapp.com",
  projectId: "blogging-website-5edb1",
  storageBucket: "blogging-website-5edb1.appspot.com",
  messagingSenderId: "1073269144728",
  appId: "1:1073269144728:web:7cb505e6f927df2758a4ed",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
