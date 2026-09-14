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
// NEW FIREBASE PROJECT CONFIGURATION
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyBCNRCrJMLE5rMk7ibraToPYCFVipCTn_k",
    authDomain: "mwitari-s-heritage-9f4ff.firebaseapp.com",
    projectId: "mwitari-s-heritage-9f4ff",
    storageBucket: "mwitari-s-heritage-9f4ff.firebasestorage.app",
    messagingSenderId: "314644112716",
    appId: "1:314644112716:web:405b8d26dc52730f0bdbe9",
    measurementId: "G-W39T3JZF34"
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
// ==========================================

export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
});


// ==========================================
// EXPORT APP
// ==========================================

export { app };
