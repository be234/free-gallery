  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

import firebase from 'firebase/compat/app';
  import "firebase/compat/storage";
  import "firebase/compat/firestore";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA3MMKIo5jJnvFYAQ8f0NT8SiIaJsZ2Kcs",
    authDomain: "belal-firegram.firebaseapp.com",
    projectId: "belal-firegram",
    storageBucket: "belal-firegram.appspot.com",
    messagingSenderId: "726234852101",
    appId: "1:726234852101:web:d2b73e2ebab5fea8f2e56c"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };