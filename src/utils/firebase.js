// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "wordsmith-d8281.firebaseapp.com",
    projectId: "wordsmith-d8281",
    storageBucket: "wordsmith-d8281.appspot.com",
    messagingSenderId: "490850566098",
    appId: "1:490850566098:web:9f0f24436cf12f7987120b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);