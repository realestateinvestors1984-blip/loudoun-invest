// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9iPohB5zvOtlEeBk1AvW7t7vP0DyuqCA",
  authDomain: "loudoun-invest.firebaseapp.com",
  projectId: "loudoun-invest",
  storageBucket: "loudoun-invest.firebasestorage.app",
  messagingSenderId: "533083952366",
  appId: "1:533083952366:web:570f34622c753a9edf4fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
