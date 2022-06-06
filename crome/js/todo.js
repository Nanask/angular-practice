const todo = document.querySelector(".todo_form");
const todoItem = document.querySelector(".todo_form input");
const todoList = document.querySelector(".todo_list");
console.log("todo", todo);
console.log("todo", todoList);

const TODOS = "todos";

let todos = [];
let id = 0;

function todoDelete(e) {
  console.log("event", e.target.parentElement);
  const li = e.target.parentElement;
  li.remove();
}

function todoUpdate(e, liId) {
  if (e.keyCode === 13) {
    const value = e.target.value;
    console.log("value", value);
    // todos.map((todo) => {
    //   console.log("todo", todo);
    //   console.log("todo", todo.id);
    //   todo.id === liId ? { ...todo, content: value } : todo;
    // });

    // console.log("set", set);

    // for (let i = 0; todos.length; i++) {
    // for (let todo in todos) {
    //   // console.log("todos", todos[todo]);
    //   // console.log("todo", todo);
    //   // console.log("liId", liId);
    //   todo === liId ? todos.splice(todo, 1, { content: value, id: todo }) : todo;
    //   // todo === liId ? todos.splice(todo, 1, { content: value, id: todo }) : todo;
    // }

    todos.forEach((todo) => {
      console.log("todos", todo);
    });
    console.log("todos", todos);
  }
  // console.log("todos", todos);
}

function todoDblclick(e) {
  const text = e.target;
  const li = text.parentElement;
  li.innerHTML = null;
  const input = document.createElement("input");
  li.appendChild(input);
  const inputText = text.innerText;
  input.setAttribute("value", inputText);
  // console.log("li", li);
  // console.log("li", li.id);

  li.addEventListener("keyup", (e) => todoUpdate(e, li.id));
}

function todoAdd(todoValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = todoValue;
  button.innerHTML = "X";
  button.addEventListener("click", todoDelete);
  li.appendChild(span);
  todoList.appendChild(li);
  li.appendChild(button);
  todos.map((todo) => {
    li.setAttribute("id", todo.id);
  });
  span.addEventListener("dblclick", (e) => todoDblclick(e));
}

function todoSubmit(e) {
  const number = id++;
  e.preventDefault();
  const todoValue = todoItem.value;
  todoItem.value = "";
  todos.push({ content: todoValue, id: number });
  todoAdd(todoValue);
  // saveTodo();
}

todo.addEventListener("submit", todoSubmit);

// function saveTodo() {
//   localStorage.setItem(TODOS, JSON.stringify(todos));
// }

// const savedTodo = localStorage.getItem(TODOS);
// console.log("saved", savedTodo);

// if (savedTodo !== null) {
//   const parsedTodo = JSON.parse(savedTodo);
//   console.log(parsedTodo);
// }
