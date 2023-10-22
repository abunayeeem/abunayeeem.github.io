// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Check if there's a user and load their tasks from localStorage
    const user = getUserFromLocalStorage();
    if (user) {
        displayTasks(user.tasks);
    }

    // Add a new task
    function addTask() {
        const inputBox = document.getElementById("input-box");
        const taskText = inputBox.value.trim();
        if (taskText === "") return;

        if (user) {
            user.tasks.push(taskText);
            saveUserToLocalStorage(user);
            displayTasks(user.tasks);
        }

        inputBox.value = "";
    }

    // Display tasks in the list
    function displayTasks(tasks) {
        const listContainer = document.getElementById("list-container");
        listContainer.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            listContainer.appendChild(li);
        });
    }

    // Clear all tasks
    document.getElementById("clear_task_button").addEventListener("click", function () {
        if (user) {
            user.tasks = [];
            saveUserToLocalStorage(user);
            displayTasks(user.tasks);
        }
    });

    // Functions to work with user data in localStorage
    function getUserFromLocalStorage() {
        const userJSON = localStorage.getItem("user");
        return userJSON ? JSON.parse(userJSON) : null;
    }

    function saveUserToLocalStorage(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }
});
