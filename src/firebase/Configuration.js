import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj5bqD2PRwPpvSRDYrBRYmeDwEOYAurjo",
    authDomain: "gallery-app-ee6bd.firebaseapp.com",
    projectId: "gallery-app-ee6bd",
    storageBucket: "gallery-app-ee6bd.appspot.com",
    messagingSenderId: "535519235812",
    appId: "1:535519235812:web:34e66503f7d2196200a6f1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
