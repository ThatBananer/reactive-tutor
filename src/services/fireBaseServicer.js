// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, EmailAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
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
export const auth = getAuth(app)

 const provider = new GoogleAuthProvider()


  export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });

 }


export const emailRegister=  async (email, password) => {
    try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log(user)
} catch (e){
    console.log(e)
}
}

export const emailLogin = async () => {

}

export const emaillogOut = async () => {

}
