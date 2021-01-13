import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDklFSSeHGmCpGLgvCuOg-lMxkhqNHtGsk",
    authDomain: "cd-wallet-app.firebaseapp.com",
    projectId: "cd-wallet-app",
    storageBucket: "cd-wallet-app.appspot.com",
    messagingSenderId: "844368300903",
    appId: "1:844368300903:web:745ebc67a31d9897b3fdc2"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}