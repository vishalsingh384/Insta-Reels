// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPhDPFC9-6lhQtSCyXdS1Ks0cgdczmkyw",
  authDomain: "reels-insta-3fc85.firebaseapp.com",
  projectId: "reels-insta-3fc85",
  storageBucket: "reels-insta-3fc85.appspot.com",
  messagingSenderId: "505525567804",
  appId: "1:505525567804:web:31c9b7256a33bbf6a59e39"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage=getStorage(app);
export {auth,storage};