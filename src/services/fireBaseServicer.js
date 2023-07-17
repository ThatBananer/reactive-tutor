// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJzqm6BgRoiiE9L93aJx3z2XntmD_H1TI",
  authDomain: "reactive-tutor-dev.firebaseapp.com",
  projectId: "reactive-tutor-dev",
  storageBucket: "reactive-tutor-dev.appspot.com",
  messagingSenderId: "321550151209",
  appId: "1:321550151209:web:0d574b07183b83f5103638",
  measurementId: "G-CEWZFN6CLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);
cons todosCol = collection()

//Detect authstate
onAuthStateChanged(auth, user => {
    if user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});
