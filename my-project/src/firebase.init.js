// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwcl1Z3V-x_LWmRGCBusbIJCWTdwoK6UM",
  authDomain: "dragon-news-bracking-e69fa.firebaseapp.com",
  projectId: "dragon-news-bracking-e69fa",
  storageBucket: "dragon-news-bracking-e69fa.firebasestorage.app",
  messagingSenderId: "569995080264",
  appId: "1:569995080264:web:0371546d6318053e611e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;