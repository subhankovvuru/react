import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB48bHO9dB-sinvJoSlsWyMsV1O89SCbdo",
  authDomain: "fir-d7a03.firebaseapp.com",
  projectId: "fir-d7a03",
  storageBucket: "fir-d7a03.firebasestorage.app",
  messagingSenderId: "1086442845934",
  appId: "1:1086442845934:web:b126706546b4ca771465ff"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth()