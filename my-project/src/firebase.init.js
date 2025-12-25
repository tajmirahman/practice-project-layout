// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMFOB8p7P88rewD7gf9iqgdRx0kJVV8yM",
  authDomain: "dragon-news-breaking.firebaseapp.com",
  projectId: "dragon-news-breaking",
  storageBucket: "dragon-news-breaking.firebasestorage.app",
  messagingSenderId: "598265501084",
  appId: "1:598265501084:web:d3a276b92ae529eeab6459",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


// apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId, 
//   appId: import.meta.env.VITE_appId,