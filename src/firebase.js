import * as firebase from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore, query, where, doc, onSnapshot, collection, getDoc, getDocs} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrvhrRChrb2gCW4Mk6JVSl3aj-2kzBhcM",
    authDomain: "ig-clone-68440.firebaseapp.com",
    projectId: "ig-clone-68440",
    storageBucket: "ig-clone-68440.appspot.com",
    messagingSenderId: "1086556643208",
    appId: "1:1086556643208:web:8155c84fbda35abd4be43d",
    measurementId: "G-DW4DCZ6XLT"
  };

const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const collectionList = collection(db, "postsbyuser")


export {app, auth, db, collectionList} 

