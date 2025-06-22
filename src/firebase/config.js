// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAKfrhD2CnRiS9WdmiVvCNq69e1VriQ3EA",
  authDomain: "mandap-decor.firebaseapp.com",
  projectId: "mandap-decor",
  storageBucket: "mandap-decor.firebasestorage.app",
  messagingSenderId: "783946075411",
  appId: "1:783946075411:web:15e86c81ff71da68155ee6",
  measurementId: "G-27HF693PYV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
