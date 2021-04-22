// Selectors
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

// Functions
const addTodo = function (evt) {
    // Prevent form from submitting
    evt.preventDefault();

    // Todo DIV
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create <li>
    let newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // CHECK MARK BUTTON
    let completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // TRASH BUTTON
    let trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Append to list
    todoList.appendChild(todoDiv);
    // Clear the field upon submit
    todoInput.value = "";
};

const deleteCheck = function (evt) {
    let item = evt.target;
};

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
