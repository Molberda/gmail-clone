import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5TaGHU8yhdtQwVCg0LrfRE_ddY0hcyio",
  authDomain: "clone-edd5b.firebaseapp.com",
  projectId: "clone-edd5b",
  storageBucket: "clone-edd5b.appspot.com",
  messagingSenderId: "859944783103",
  appId: "1:859944783103:web:98f317f78b1d430e3f10ca",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider  };
