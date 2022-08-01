import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIRc7kbJHMi8UiWqOKIL-AFYT47nJ66hU",
    authDomain: "fir-react-a6911.firebaseapp.com",
    projectId: "fir-react-a6911",
    storageBucket: "fir-react-a6911.appspot.com",
    messagingSenderId: "646936651626",
    appId: "1:646936651626:web:064321521f386a7d48e713"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();
