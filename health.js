document.addEventListener('DOMContentLoaded', () => {
    // Health data form
    const healthForm = document.getElementById('health-form');
    const weightInput = document.getElementById('weight');
    const caloriesInput = document.getElementById('calories');
    const waterInput = document.getElementById('water');
    const progressList = document.getElementById('progress-list');

    // Health goal form
    const goalForm = document.getElementById('goal-form');
    const goalInput = document.getElementById('goal');

    // Document upload form
    const documentForm = document.getElementById('document-form');
    const documentInput = document.getElementById('document');
    const documentList = document.getElementById('document-list');

    // Initialize the progress list
    let progressData = JSON.parse(localStorage.getItem('progress')) || [];
    updateProgressList();

    // Handle health form submission
    if (healthForm) {
        healthForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const weight = weightInput.value.trim();
            const calories = caloriesInput.value.trim();
            const water = waterInput.value.trim();

            if (!weight || !calories || !water) {
                alert('Please fill in all fields.');
                return;
            }

            const progress = `Weight: ${weight}kg, Calories: ${calories}, Water: ${water}L`;

            // Save progress to localStorage
            progressData.push(progress);
            localStorage.setItem('progress', JSON.stringify(progressData));

            // Clear the input fields
            weightInput.value = '';
            caloriesInput.value = '';
            waterInput.value = '';

            // Update the progress list
            updateProgressList();
        });
    }

    // Handle goal form submission
    if (goalForm) {
        goalForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const goal = goalInput.value.trim();
            if (!goal) {
                alert('Please enter a health goal.');
                return;
            }

            alert(`Your health goal has been set: ${goal}`);

            // Clear the input field
            goalInput.value = '';
        });
    }

    // Handle document form submission
    if (documentForm) {
        documentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const documentFile = documentInput.files[0];

            if (documentFile) {
                const reader = new FileReader();

                reader.onload = function () {
                    const documentItem = document.createElement('li');
                    documentItem.textContent = `Uploaded: ${documentFile.name}`;
                    documentList.appendChild(documentItem);
                };

                // Read the document file
                reader.readAsDataURL(documentFile);

                // Clear the document input field
                documentInput.value = '';
            } else {
                alert('Please select a document to upload.');
            }
        });
    }

    // Function to update the progress list display
    function updateProgressList() {
        progressList.innerHTML = '';

        if (progressData.length === 0) {
            progressList.innerHTML = '<li>No progress data available yet.</li>';
        } else {
            progressData.forEach((progress) => {
                const progressItem = document.createElement('li');
                progressItem.textContent = progress;
                progressList.appendChild(progressItem);
            });
        }
    }
});
