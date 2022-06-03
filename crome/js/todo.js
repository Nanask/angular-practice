const todo = document.querySelector(".todo_form");
const todoItem = document.querySelector(".todo_form input");
const todoList = document.querySelector(".todo_list");
console.log("todo", todo);
console.log("todo", todoList);

const todos = [];
let id = 0;

function saveTodo() {
  localStorage.setItem("todo", JSON.stringify(todos));
}

function todoDelete(e) {
  console.log("event", e.target.parentElement);
  const li = e.target.parentElement;
  li.remove();
}

function todoUpdate(e) {
  const text = e.target;
  const todo = e.target.value;
  const li = text.parentElement;
  const input = document.createElement("input");
  // const span = e.target.parentElement;
  const span = li.childNodes;
  li.appendChild(input);
  input.setAttribute("value", text.value);
  text.remove();
  console.log("li", li);
  console.log("span", span);
  console.log("text", text);
  console.log("todo", todo);
}

function todoAdd(todoValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = todoValue;
  button.innerText = "X";
  button.addEventListener("click", todoDelete);
  li.appendChild(span);
  todoList.appendChild(li);
  li.appendChild(button);
  span.addEventListener("dblclick", todoUpdate);

  // localStorage.setItem("todo", todoValue);
}

function todoSubmit(e) {
  const number = id++;
  e.preventDefault();
  const todoValue = todoItem.value;
  todoItem.value = "";
  todos.push({ todoValue, id: number });
  todoAdd(todoValue);
  saveTodo();
}

todo.addEventListener("submit", todoSubmit);
