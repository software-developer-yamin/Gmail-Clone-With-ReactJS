import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyDsxwuVDLUBG-Us-xA-2DxF4v2VdUdRuaU",
     authDomain: "clone-with-reactjs-5e5d2.firebaseapp.com",
     projectId: "clone-with-reactjs-5e5d2",
     storageBucket: "clone-with-reactjs-5e5d2.appspot.com",
     messagingSenderId: "494661246666",
     appId: "1:494661246666:web:0393a74b39a5f2bbbade33",
     measurementId: "G-G0NLDQTW4S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
