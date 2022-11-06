// Edit todo
function editingTodo(edit) {
  let liContent = edit.querySelector("span");
  let input = document.createElement("input");
  input.type = "text";
  input.value = liContent.textContent;
  edit.append(input);
  input.focus();
  input.addEventListener("blur", () => {
    liContent.innerHTML = input.value;
    input.remove();
  });
}
// Edit button selected
function targetEditButton () {
  const todosEditButton = document.querySelector("#edit_btn");
  todosEditButton.addEventListener("click", function callEdit(e){editingTodo(e.target.parentElement.parentElement)});
}

// Delete Todo 
function deleteTodo(e) {
  const buttonClicked = e.target;
  const todoItem = buttonClicked.parentNode.parentNode.parentNode;
  todoItem.remove();
}

// Delete button targetd
function targetTodoToBeDelected () {
  const todosButtonCollection = document.querySelectorAll("#delete_btn");
   
  const lastTodoButton = todosButtonCollection[todosButtonCollection.length -1];
  lastTodoButton.addEventListener("click", deleteTodo)
}



function showTodoOnScreen (todo) {
  const listOfTodos = document.querySelector("#todo_list");
  const li = document.createElement("li")

  li.innerHTML =`<div>
  <input class="todo__checkbox" type="checkbox" />
  <span class="todo__text"> ${todo} </span>
  <div class="todo__actions--wrapper">
    <button id="edit_btn" class="todo__actions edit__btn">edit</button>
    <button id="delete_btn" class="todo__actions delete__btn">delete</button>
  </div>
</div>`;

li.classList.add("todo__section--todoItem");
listOfTodos.appendChild(li)

targetTodoToBeDelected()
targetEditButton()
}



function onTodoFormSubmit (e) {
  e.preventDefault();
  const inputField = document.querySelector("#form_input");
  const inputValue = inputField.value;
  console.log(inputValue);

  showTodoOnScreen(inputValue);
  
inputField.value = "";
}

const submitForm = document.querySelector("#form");
submitForm.addEventListener("submit", onTodoFormSubmit);
