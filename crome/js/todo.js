// 작성 날짜는 안보이게 저장, 작성 시간은 보이게 저장

const todo = document.querySelector(".todo_form");
const todoItem = document.querySelector(".todo_form input");
const todoList = document.querySelector(".todo_list");

const TODOS = "todos";
let todoDate = new Date();
console.log("todoDate", todoDate);

let todos = [];
let id = 0;

// todo 작성 날짜와 시간 넣기
// let date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();

// todos = JSON.parse(localStorage.getItem(TODOS));

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
    console.log("todos", todos);
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

// 완료표시
function todoCompleted(e, todoId) {
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
    const div = document.createElement("div");
    const button = document.createElement("button");
    checkBox.classList.add("todo_check");
    div.classList.add("todo_text");
    button.classList.add("todo_delete");

    // HTML 추가
    div.innerText = todo.content;
    button.innerHTML = '<i class="fa-solid fa-x"></i>';

    //Delete
    button.addEventListener("click", () => todoDelete(todo.id));

    // Completed;
    checkBox.addEventListener("click", (e) => todoCompleted(e, todo.id));

    if (todo.completed) {
      checkBox.classList.add("checked");
      checkBox.innerHTML = '<i class="fa-solid fa-check" id="check"></i>';
      div.style.textDecoration = "line-through";
      div.style.color = "gray";
    }
    todoList.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(div);
    li.appendChild(button);
    li.setAttribute("id", todo.id);
    div.addEventListener("dblclick", (e) => todoDblclick(e));
  });
}

// Create
function todoSubmit(e) {
  e.preventDefault();
  const todoValue = todoItem.value;
  todoItem.value = "";
  // 밑에 if로 조건문을 걸어놨기 때문에 -1부터 시작하도록 진행
  const length = todos.length - 1;
  console.log("length", length);

  // const localId = localStorage.getItem(TODOS);
  // const parseId = JSON.parse(localId);
  // console.log("todoId", parseId.length - 1);
  // const todoId = parseId.length - 1;
  // console.log("todoId", todoId);
  // console.log("todo", todos[todos.length - 1].id);

  // console.log("todos", todos);
  // 배열이 존재하지 않아서 id값을 찾을수 없었기 때문에 문제가 발생
  // const todoId = todos[length].id;
  // 마지막 요소의 id를 찾아!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // 너때문에 이렇게 오래 걸렸잫아 너는 블로그에 올릴꺼야 이 나쁜놈아

  if (length > 1) {
    const todoId = todos[length].id;
    console.log("todoId", todoId);
    const todoObj = { content: todoValue, id: todoId + 1, completed: false, day: todoDate };
    todos.push(todoObj);
    console.log("todos", todos);
    console.log("todos[0].id", todos[0].id);
  } else {
    const number = id++;
    const todoObj = { content: todoValue, id: number, completed: false, day: todoDate };
    todos.push(todoObj);
  }
  paintTodos();
  saveTodo();
}

todo.addEventListener("submit", todoSubmit);

const savedTodo = localStorage.getItem(TODOS);

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todos = parsedTodo;
  parsedTodo.forEach(paintTodos);
}
