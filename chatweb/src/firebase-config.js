// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACbJZrsbaca-ZYjVaqG4TotTwNcITDArY",
  authDomain: "chatweb-e2489.firebaseapp.com",
  projectId: "chatweb-e2489",
  storageBucket: "chatweb-e2489.appspot.com",
  messagingSenderId: "276955331252",
  appId: "1:276955331252:web:5005e9fb4699186d9f35e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();