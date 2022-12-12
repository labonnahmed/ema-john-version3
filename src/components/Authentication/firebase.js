import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDStrcdDzWrlysajkRQNsiyI2qOyTI2qTM",
  authDomain: "ema-john-version3.firebaseapp.com",
  projectId: "ema-john-version3",
  storageBucket: "ema-john-version3.appspot.com",
  messagingSenderId: "387884452343",
  appId: "1:387884452343:web:cfb2abc2af80e5c6b586f2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);