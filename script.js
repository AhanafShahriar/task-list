//defining UI elements
let taskInput = document.querySelector('#taskInput');
let addTask = document.querySelector('#addTask');
let filterTasksInp = document.querySelector('#filter-tasks');
let tasksList = document.querySelector('#tasks');
let clearAll = document.querySelector('#clear-all');

//events
addTask.addEventListener('click', addNewTask);
tasksList.addEventListener('click', removeTask);
clearAll.addEventListener('click', clearAllTasks);

//functions
function addNewTask(e) {
    let singleTask = document.createElement('li');
    singleTask.appendChild(document.createTextNode(taskInput.value + " "));
    let removeMark = document.createElement('a');
    removeMark.setAttribute('href', '#');
    removeMark.appendChild(document.createTextNode('x'));
    singleTask.appendChild(removeMark);
    tasksList.appendChild(singleTask);
    taskInput.value = "";
    e.preventDefault();
}

function removeTask(e) {
    let element = e.target;
    if (element.hasAttribute('href')) {
        element.parentElement.remove();
    }
}

function clearAllTasks() {
    //tasksList.innerHTML = "";
    //faster
    while (tasksList.firstChild) {
        tasksList.firstChild.remove();
    }
}