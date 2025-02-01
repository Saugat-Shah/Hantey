document.addEventListener('DOMContentLoaded', () => {
    // Get the elements
    const themeSelect = document.getElementById('theme');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const notificationCheckboxes = document.querySelectorAll('input[name="notifications"]');
    const saveButton = document.querySelector('button[type="submit"]');

    // Load saved settings from localStorage if they exist
    const savedTheme = localStorage.getItem('theme');
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    const savedNotifications = JSON.parse(localStorage.getItem('notifications')) || {};

    // Apply saved settings
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeSelect.value = savedTheme;
    }
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    if (savedEmail) {
        emailInput.value = savedEmail;
    }
    notificationCheckboxes.forEach((checkbox) => {
        checkbox.checked = savedNotifications[checkbox.value] || false;
    });

    // Event listener to handle theme change
    themeSelect.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });

    // Event listener for form submission (save settings)
    saveButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Save form data to localStorage
        localStorage.setItem('username', usernameInput.value);
        localStorage.setItem('email', emailInput.value);

        // Save notifications preferences
        const notifications = {};
        notificationCheckboxes.forEach((checkbox) => {
            notifications[checkbox.value] = checkbox.checked;
        });
        localStorage.setItem('notifications', JSON.stringify(notifications));

        alert('Settings saved successfully!');
    });
});
