import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtmkFhTbgk0MCJL92Pl4H62kVxOG-QMFE",
  authDomain: "clone-34f51.firebaseapp.com",
  projectId: "clone-34f51",
  storageBucket: "clone-34f51.appspot.com",
  messagingSenderId: "499793041297",
  appId: "1:499793041297:web:fd4e4cf6b9f5f35fc2ec30",
  measurementId: "G-617TMQ4EYL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
