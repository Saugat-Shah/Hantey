document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#signUp-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from actually submitting

        // Perform sign-up validation if needed

        // Show a popup message
        alert("You have created an account successfully!");

        // Redirect to the login page
        window.location.href = "main.html"; 
    });
});
