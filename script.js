function login(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username !== "" && password !== "") {

        window.location.href = "dashboard.html";

    } else {

        alert("Please enter your login details.");

    }
}