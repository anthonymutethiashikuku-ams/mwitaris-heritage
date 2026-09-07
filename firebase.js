import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from
    "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDPjZb2zO2uJZUveETWJeERRIyd1SGmKsA",
    authDomain: "mwitari-s-heritage.firebaseapp.com",
    projectId: "mwitari-s-heritage",
    storageBucket: "mwitari-s-heritage.firebasestorage.app",
    messagingSenderId: "774010218687",
    appId: "1:774010218687:web:33fdeb0cedc4dfde2bbe0a",
    measurementId: "G-J981E6KWN6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);