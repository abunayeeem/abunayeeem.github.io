// Define UI Element
let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');
let clearBtn = document.querySelector('#clear_task_button');

// Define event Listeners
listContainer.addEventListener('click', checkRemoveTask);
clearBtn.addEventListener('click', clearTask);

// Define functions
// Add Task
function addTask() {
    if (inputBox.value.trim() === '') {
        alert('You must write Something!');
    } else {
        // Create li element
        let listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        listItem.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

// Check and Remove Task
function checkRemoveTask(e) {
    if (e.target.tagName.toLowerCase() === 'li') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName.toLowerCase() === 'span') {
        if (confirm('Are you sure?')) {
            e.target.parentElement.remove();
        }
        saveData();
    }
}

// Clear Task
function clearTask(e) {

    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
        saveData();
    }

}

// Save Data in Local Storage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();