
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyDEZous9YxJnu7fcAMZrX1Urpp9pkAt-mU",
  authDomain: "tiktok---jornadadev-79472.firebaseapp.com",
  projectId: "tiktok---jornadadev-79472",
  storageBucket: "tiktok---jornadadev-79472.appspot.com",
  messagingSenderId: "427392551590",
  appId: "1:427392551590:web:acd39c2b72b26edfaf0267",
  measurementId: "G-7TG47Y48P9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;