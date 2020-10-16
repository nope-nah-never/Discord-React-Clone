import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBD6QiO2zJ-JahwFSmWZkUeKYljudXl74s",
    authDomain: "discord-4f2aa.firebaseapp.com",
    databaseURL: "https://discord-4f2aa.firebaseio.com",
    projectId: "discord-4f2aa",
    storageBucket: "discord-4f2aa.appspot.com",
    messagingSenderId: "38316968011",
    appId: "1:38316968011:web:a5ceddcf6ee16c4678a5ce",
    measurementId: "G-FGGGT55C63"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();  // Google authentication

export { auth , provider};
export default db;