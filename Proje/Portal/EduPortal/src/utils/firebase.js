import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQqcwholcUHxqP6dfVxt9TDzPVbGTvZrU",
  authDomain: "eduportal-187d5.firebaseapp.com",
  projectId: "eduportal-187d5",
  storageBucket: "eduportal-187d5.appspot.com",
  messagingSenderId: "664586465989",
  appId: "1:664586465989:web:bddfefd791d33462f0b6ac",
};

initializeApp(firebaseConfig);

const DB = getFirestore();
const AUTH = getAuth();

export { DB, AUTH };
