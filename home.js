// home.js

// Display the username from localStorage in the welcome message
document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("username").textContent = username;
    } else {
        document.getElementById("username").textContent = "Guest";
    }
});
