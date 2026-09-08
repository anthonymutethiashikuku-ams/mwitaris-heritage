// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPjZb2zO2uJZUveETWJeERRIyd1SGmKsA",
    authDomain: "mwitari-s-heritage.firebaseapp.com",
    projectId: "mwitari-s-heritage",
    storageBucket: "mwitari-s-heritage.firebasestorage.app",
    messagingSenderId: "774010218687",
    appId: "1:774010218687:web:33fdeb0cedc4dfde2bbe0a",
    measurementId: "G-J981E6KWN6"
};

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { initializeFirestore } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Authentication
export const auth = getAuth(app);


// Firestore
// Force long polling for better compatibility with
// some Android browsers and mobile networks.
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
});
