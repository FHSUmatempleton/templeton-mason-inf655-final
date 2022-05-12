// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzE5MtUOAHvWBuOyTnIg8FXKTXurJkuM0",
  authDomain: "movie-list-474a1.firebaseapp.com",
  projectId: "movie-list-474a1",
  storageBucket: "movie-list-474a1.appspot.com",
  messagingSenderId: "112758934045",
  appId: "1:112758934045:web:3cd96beb4f439a813994f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();