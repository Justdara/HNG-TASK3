import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDqfUHqhl-vqTewNEcDnnQFjxYY8Gv_iI",
  authDomain: "react-firebase-login-29de4.firebaseapp.com",
  projectId: "react-firebase-login-29de4",
  storageBucket: "react-firebase-login-29de4.appspot.com",
  messagingSenderId: "829624126630",
  appId: "1:829624126630:web:2fd04c62793ee5473b7867",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
