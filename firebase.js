// ============================================
// MWITARI'S HERITAGE - FIREBASE CONFIGURATION
// ============================================

// Firebase App
import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Firebase Authentication
import {
    getAuth
} from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Cloud Firestore
import {
    getFirestore
} from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// ============================================
// FIREBASE PROJECT CONFIGURATION
// ============================================

const firebaseConfig = {

    apiKey: "AIzaSyDPjZb2zO2uJZUveETWJeERRIyd1SGmKsA",

    authDomain:
        "mwitari-s-heritage.firebaseapp.com",

    projectId:
        "mwitari-s-heritage",

    storageBucket:
        "mwitari-s-heritage.firebasestorage.app",

    messagingSenderId:
        "774010218687",

    appId:
        "1:774010218687:web:33fdeb0cedc4dfde2bbe0a",

    measurementId:
        "G-J981E6KWN6"
};


// ============================================
// INITIALIZE FIREBASE
// ============================================

const app = initializeApp(firebaseConfig);


// ============================================
// INITIALIZE AUTHENTICATION
// ============================================

export const auth = getAuth(app);


// ============================================
// INITIALIZE FIRESTORE
// ============================================

export const db = getFirestore(app);


// ============================================
// EXPORT FIREBASE APP
// ============================================

export { app };
