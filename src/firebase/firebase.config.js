// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrVUHqndNDBXjpQtrUy4JbPQ1WyGYplcI",
  authDomain: "dog-house-74ba6.firebaseapp.com",
  projectId: "dog-house-74ba6",
  storageBucket: "dog-house-74ba6.appspot.com",
  messagingSenderId: "231724717515",
  appId: "1:231724717515:web:69913f61a627fc1048924e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app