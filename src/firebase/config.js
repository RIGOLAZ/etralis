import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8FfWDAQo9Oo7V0HocHlkVqEHOcdgOUNU",
  authDomain: "etralis.firebaseapp.com",
  projectId: "etralis",
  storageBucket: "etralis.appspot.com",
  messagingSenderId: "870023915404",
  appId: "1:870023915404:web:6b03af5bc33b0b171798a9",
  measurementId: "G-QT8PWGGHE6"
  };

//init firebase
const app = initializeApp(firebaseConfig);

//init services
const db = getFirestore();

export { db, app };