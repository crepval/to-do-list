document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const name = document.getElementById("taskName").value;
    const desc = document.getElementById("taskDesc").value;
    const due = document.getElementById("taskDue").value;

    if (!name || !due) {
        alert("Please enter a task name and due date.");
        return;
    }

    const task = { name, desc, due };
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    clearInputs();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${task.name}</strong>: ${task.desc} <br> Due: ${task.due} 
        <button class='delete-btn' onclick='removeTask(${index})'>Done</button>`;
        taskList.appendChild(li);
    });
}

function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function loadTasks() {
    displayTasks();
}

function clearInputs() {
    document.getElementById("taskName").value = "";
    document.getElementById("taskDesc").value = "";
    document.getElementById("taskDue").value = "";
}
