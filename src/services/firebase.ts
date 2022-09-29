import { initializeApp } from 'firebase/app';
import {
    getAuth, GoogleAuthProvider,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

export const provider = new GoogleAuthProvider();

const firebaseConfig = {
    apiKey: "AIzaSyApriRdIO-eqCEunm3T81623hL0Zf08VnQ",
    authDomain: "next-js-firebase-app.firebaseapp.com",
    projectId: "next-js-firebase-app",
    storageBucket: "next-js-firebase-app.appspot.com",
    messagingSenderId: "205550914316",
    appId: "1:205550914316:web:bd8b4391c55d8dc3f75729",
    measurementId: "G-Y89Z7DV5T5"
}
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export {
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
}