// ==========================================
// MWITARI'S HERITAGE - FIREBASE.JS
// ==========================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { initializeFirestore } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// ==========================================
// FIREBASE CONFIGURATION
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyDPjZb2zO2uJZUveETWJeERRIyd1SGmKsA",
    authDomain: "mwitari-s-heritage.firebaseapp.com",
    projectId: "mwitari-s-heritage",
    storageBucket: "mwitari-s-heritage.firebasestorage.app",
    messagingSenderId: "774010218687",
    appId: "1:774010218687:web:33fdeb0cedc4dfde2bbe0a",
    measurementId: "G-J981E6KWN6"
};


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app = initializeApp(firebaseConfig);


// ==========================================
// FIREBASE AUTHENTICATION
// ==========================================

export const auth = getAuth(app);


// ==========================================
// FIRESTORE
// Force long polling to avoid browser/network
// connection problems.
// ==========================================

export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
});


// ==========================================
// EXPORT APP
// ==========================================

export { app };
