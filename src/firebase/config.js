// import firebase from '@firebase/app'
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAWzobWKDv9SJ6DTc0rbRROqFSQSygVAR8",
    authDomain: "etoile-triangle.firebaseapp.com",
    projectId: "etoile-triangle",
    storageBucket: "etoile-triangle.appspot.com",
    messagingSenderId: "663821623224",
    appId: "1:663821623224:web:dc2236a55b2a8277f5b94d",
    measurementId: "G-83XGYHTL0Y"
  };

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
// timestamp
const timestamp = firebase.firestore.Timestamp();

export { projectFirestore, projectAuth, timestamp, firebase }