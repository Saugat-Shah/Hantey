document.addEventListener('DOMContentLoaded', () => {
    // Track Courses
    const courseForm = document.getElementById('course-form');
    const courseList = document.getElementById('course-list');

    courseForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const course = document.getElementById('course').value;
        const progress = document.getElementById('progress').value;
        const notes = document.getElementById('notes').value;

        if (course && progress && notes) {
            const courseItem = document.createElement('li');
            courseItem.innerHTML = `
                ${course} - ${progress}% complete. Notes: ${notes}
                <button class="edit" onclick="editCourse(this)">Edit</button>
                <button class="delete" onclick="deleteCourse(this)">Delete</button>
            `;
            courseList.appendChild(courseItem);

            courseForm.reset();
        } else {
            alert('Please fill out all fields!');
        }
    });

    // Set Learning Goals
    const goalForm = document.getElementById('goal-form');
    const goalList = document.getElementById('goal-list');

    goalForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const goal = document.getElementById('goal').value;
        if (goal) {
            const goalItem = document.createElement('li');
            goalItem.innerHTML = `
                Goal: ${goal}
                <button class="edit" onclick="editGoal(this)">Edit</button>
                <button class="delete" onclick="deleteGoal(this)">Delete</button>
            `;
            goalList.appendChild(goalItem);

            goalForm.reset();
        } else {
            alert('Please enter a goal!');
        }
    });

    // Document Upload Handling
    const documentForm = document.getElementById('document-form');
    const documentList = document.getElementById('document-list');

    documentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const documentInput = document.getElementById('document');
        const file = documentInput.files[0];

        if (file) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${file.name}</span>
                <button onclick="removeDocument(this)">Remove</button>
            `;
            documentList.appendChild(listItem);

            documentInput.value = ''; // Clear input
        } else {
            alert('Please select a file to upload.');
        }
    });
});

// Remove Document
function removeDocument(button) {
    button.parentElement.remove();
}

// Edit Course
function editCourse(button) {
    const courseItem = button.parentElement;
    const courseDetails = courseItem.textContent.split(' - '); // Extract course, progress, and notes

    const course = courseDetails[0];
    const progress = courseDetails[1].split('%')[0];
    const notes = courseDetails[2].replace('Notes: ', '').trim();

    document.getElementById('course').value = course;
    document.getElementById('progress').value = progress;
    document.getElementById('notes').value = notes;

    // Remove the old course item after editing
    courseItem.remove();
}

// Delete Course
function deleteCourse(button) {
    button.parentElement.remove();
}

// Edit Goal
function editGoal(button) {
    const goalItem = button.parentElement;
    const goal = goalItem.textContent.replace('Goal: ', '').trim();

    document.getElementById('goal').value = goal;

    // Remove the old goal item after editing
    goalItem.remove();
}

// Delete Goal
function deleteGoal(button) {
    button.parentElement.remove();
}
