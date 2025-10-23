// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmUEfhg0vzG-0IygMhtTSsrrx0vy06vLU",
  authDomain: "fari-toy.firebaseapp.com",
  projectId: "fari-toy",
  storageBucket: "fari-toy.firebasestorage.app",
  messagingSenderId: "747982960913",
  appId: "1:747982960913:web:7b8d1c915743b4f4f574b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export app and auth (only once)
export const auth = getAuth(app);
export default app;
