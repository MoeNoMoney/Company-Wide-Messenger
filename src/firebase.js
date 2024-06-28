import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
 

const firebaseConfig = {
    apiKey: "AIzaSyDnTINnOKTbgrgslq-4gLz3l-lXsbY3n24",
    authDomain: "slack-clone-141a9.firebaseapp.com",
    projectId: "slack-clone-141a9",
    storageBucket: "slack-clone-141a9.appspot.com",
    messagingSenderId: "683563424661",
    appId: "1:683563424661:web:455bab7aa60eaf3aaa749c",
    measurementId: "G-Y6LYHFGWET"
  };

const firebaseApp = initializeApp(firebaseConfig );  /*  connects backend to frontend  */
const db = getFirestore(firebaseApp);  /* get access to database */
const auth = getAuth();
const provider = new  GoogleAuthProvider();

export { auth , provider };
export default db;  /*  default makes it so you dont have to type out the import like so " import { db , auth , provider } "  instead its just import db from './firebase'*/


/* the way that a db is explained is that a collection is the big one that holds documents and documents hold data like a name or timestamp */