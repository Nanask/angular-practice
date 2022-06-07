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
  const _todo = todos.filter((todo) => {
    return todo.id !== todoId;
  });
  todos = _todo;
  paintTodos(_todo);
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
  // const check = checkBox.childNodes;
  const check = document.getElementById("check");
  // check.style.color = "red";

  console.log("check", check);

  // // const _todos = todos.map((todo) => {
  //   console.log("todoId", todoId);
  // console.log("todo.id", todo.id);
  // return todo.id == todoId ? { ...todo, completed: true } : { ...todo, completed: false };
  if (todo.id == todoId) {
    todos = { ...todos, completed: todo.completed };
    check.style.color = "red";
  } else if (!todo.completed) {
    todos = { ...todo, completed: todo.completed };
    check.style.color = "white";
  }
  // return todos;
  // });

  console.log("_todos", todos);
}

// Create 한 요소 그려주기
function paintTodos() {
  todoList.innerHTML = null;
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo_item");

    const span = document.createElement("span");

    const button = document.createElement("button");
    button.classList.add("todo_delete");

    const check = document.createElement("div");
    check.classList.add("check_box");

    // HTML 추가
    span.innerText = todo.content;
    button.innerHTML = '<i class="fa-solid fa-x"></i>';
    check.innerHTML = '<i class="fa-solid fa-check" id="check"></i>';

    //Delete
    button.addEventListener("click", () => todoDelete(todo.id));

    //Completed
    check.addEventListener("click", (e) => todoCompleted(e, todo.id));

    todoList.appendChild(li);
    li.appendChild(check);
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
