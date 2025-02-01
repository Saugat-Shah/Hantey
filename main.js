document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from actually submitting

        const username = form.querySelector("input[name='username']").value;
        
        // Store username in localStorage
        localStorage.setItem("username", username);

        // Redirect to the home page
        window.location.href = "home.html";
    });
});
