// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyCGjmLJCz4I8j98yw1izJzufxbGN1vJzJ8",
  authDomain: "rideshare-61b42.firebaseapp.com",
  projectId: "rideshare-61b42",
  storageBucket: "rideshare-61b42.appspot.com",
  messagingSenderId: "953634454158",
  appId: "1:953634454158:web:4ab291468415f6234667df",
  measurementId: "G-X4ED0EPJDB"
   
  };
  let app;
  if (getApps.length < 1) {
    app = initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }
  
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  export { auth, db, storage };





/*
import firebase from "firebase/compat/app";
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCeRHGfgS-Nwuoy07R_WboM-ygcRR4PcXU",
  authDomain: "fyproject-b3551.firebaseapp.com",
  projectId: "fyproject-b3551",
  storageBucket: "gs://fyproject-b3551.appspot.com",
  messagingSenderId: "730603903276",
  appId: "1:730603903276:web:fa4eb1e5493e23558bf489",
};
let app;
if (getApps.length < 1) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

*/