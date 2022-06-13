const todo = document.querySelector(".todo_form");
const todoItem = document.querySelector(".todo_form input");
const todoList = document.querySelector(".todo_list");

const TODOS = "todos";

let todos = [];
let id = 0;

function saveTodo() {
  localStorage.setItem(TODOS, JSON.stringify(todos));
}

function todoDelete(todoId) {
  const _todos = todos.filter((todo) => {
    return todo.id !== todoId;
  });
  todos = _todos;
  paintTodos(_todos);
  saveTodo();
}

function todoUpdate(e, todoId) {
  if (e.keyCode === 13) {
    const value = e.target.value;
    const _todos = todos.map((todo) => {
      return todo.id == todoId ? { ...todo, content: value } : todo;
    });
    todos = _todos;
    paintTodos(_todos);
    saveTodo();
  }
}

function todoDblclick(e) {
  const text = e.target;
  const li = text.parentElement;
  li.innerHTML = null;
  const input = document.createElement("input");
  li.appendChild(input);
  const inputText = text.innerText;
  input.setAttribute("value", inputText);
  const todoId = li.id;
  li.addEventListener("keyup", (e) => todoUpdate(e, todoId));
}

function todoCompleted(e, todoId) {
  const checkBox = e.target.parentElement;
  const check = document.querySelector(".todo_check");
  console.log("checkBox", checkBox);
  console.log("id", todoId);

  console.log("check", check);

  const _todos = todos.map((todo) => {
    return todo.id == todoId ? { ...todo, completed: !todo.completed } : todo;
  });
  todos = _todos;
  paintTodos(todos);
}

// Create 한 요소 그려주기
function paintTodos() {
  todoList.innerHTML = null;
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo_item");
    const checkBox = document.createElement("div");
    const span = document.createElement("span");
    const button = document.createElement("button");
    checkBox.classList.add("todo_check");
    button.classList.add("todo_delete");

    // HTML 추가
    span.innerText = todo.content;
    button.innerHTML = '<i class="fa-solid fa-x"></i>';

    //Delete
    button.addEventListener("click", () => todoDelete(todo.id));

    // Completed;
    checkBox.addEventListener("click", (e) => todoCompleted(e, todo.id));

    if (todo.completed) {
      checkBox.classList.add("checked");
      checkBox.innerHTML = '<i class="fa-solid fa-check" id="check"></i>';
    }

    todoList.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    li.setAttribute("id", todo.id);
    span.addEventListener("dblclick", (e) => todoDblclick(e));
  });
}

// Create
function todoSubmit(e) {
  const number = id++;
  e.preventDefault();
  const todoValue = todoItem.value;
  todoItem.value = "";
  const todoObj = { content: todoValue, id: number, completed: false };
  // todos.push({ content: todoValue, id: number });
  todos.push(todoObj);
  console.log("todosObj", todoObj);
  paintTodos();
  saveTodo();
}

todo.addEventListener("submit", todoSubmit);

const savedTodo = localStorage.getItem(TODOS);
console.log("saved", savedTodo);

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  // console.log("parsedTodo", parsedTodo());
  todos = parsedTodo;
  console.log("todos", todos);
  parsedTodo.forEach(paintTodos);

  // console.log("todos", todos);
}
