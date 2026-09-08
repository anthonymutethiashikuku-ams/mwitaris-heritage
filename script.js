import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


window.login = async function(event) {

    event.preventDefault();

    const email =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        // Login successful
        window.location.href = "dashboard.html";


    } catch (error) {

        console.error(error);

        // Login failed
        alert("Incorrect email or password. Please try again.");

    }

};