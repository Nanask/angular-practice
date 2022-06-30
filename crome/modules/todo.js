// 작성 날짜는 안보이게 저장, 작성 시간은 보이게 저장
import { date, year, month, day } from "./date.js";

const todo = document.querySelector(".todo_form");
const todoItem = document.querySelector(".todo_form input");
const todoList = document.querySelector(".todo_list");

const TODOS = "todos";

let todos = [];
// let todos = [];
let id = 0;

// todo 작성 날짜와 시간 넣기
// let date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();

// todos = JSON.parse(localStorage.getItem(TODOS));

function saveTodo(todoId) {
  // console.log("newTodo", newTodo);
  // console.log("newTodo", newTodo);
  // console.log("newTodo", newTodo.id);
  // console.log("todos", todos);
  // console.log("todoId", todoId);

  // const updateTodo = [...todos];
  // const updateTodo = todos.filter((todo) => {
  //   // return todo.id == todos.id ? { ...todos, completed: todo.completed, content: todo.content } : todos;
  //   // console.log("todo", todo);
  //   return todo.id == todoId;
  // });
  // const updateTodo = todos.map((todo) => {
  //   // todos.filter((newTodo) => {
  //   //   console.log("newtodo", newTodo);
  //   //   return newTodo.id == todo.id;
  //   // });
  //   // console.log("todo", todo);
  //   return todo.id == todoId ? { ...todo, completed: todo.completed, content: todo.content } : todo;
  // });
  // if (todoId == todos[0].id) {
  //   const updateTodo = { ...todos, content: todos.content, completed: todos.completed };
  //   console.log("updateTodo", updateTodo);
  // }
  // // todos의 map을 돌려서 그 안에 todos를 filter로 돌려서 id가 일치하는 값을 추출해서 넣어주기?
  // console.log("updateTodo.completed", updateTodo[0].completed);
  // console.log("updateTodo.content", updateTodo[0].content);
  // const updateTodo = todos.map((todo) => {
  // console.log("updateTodo.completed", updateTodo.completed);
  // console.log("updateTodo.content", updateTodo.content);
  // return todoId == todo.id ? { ...todo, completed: updateTodo[0].completed, content: updateTodo[0].content } : todo;
  // todos.filter((newTodo) => {
  //   return newTodo.id == todo.id ? { ...todo, completed: newTodo.completed, content: newTodo.content } : todo;
  // });
  // });
  // console.log("update", update);
  // if (todoId == updateTodo.id) {
  //   updateTodo = { ...todos, completed: updateTodo.completed, content: updateTodo.content };
  // }
  // if(todoId == updateTodo.id) {
  //   const update = {...todo, completed: todos.completed, content: todos.content}
  // }

  // console.log("updateTodo", updateTodo);
  // console.log("newTodo", newTodo[newTodo].content);
  // todos = { ...todos, ...todos, completed: newTodo.completed, content: newTodo.content };
  localStorage.setItem(TODOS, JSON.stringify(todos));
}

function todoDelete(todoId) {
  const _todos = todos.filter((todo) => {
    return todo.id !== todoId;
  });
  todos = _todos;
  // paintTodos(todos);
  // todos.forEach(paintTodos);
  paintTodo(todos);
  // saveTodo();
}

function todoUpdate(e, todoId) {
  // todoList.innerHTML = null;
  if (e.keyCode === 13) {
    const value = e.target.value;
    const _todos = todos.map((todo) => {
      return todo.id == todoId ? { ...todo, content: value } : todo;
    });
    todos = _todos;
    console.log("todos", todos);
    // paintTodos(todos);
    // _todos.forEach(paintTodos);
    paintTodo(todos);
    // saveTodo();
  }
}

function todoDblclick(e) {
  const text = e.target;
  const li = text.parentElement;
  console.log("li", li);
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
  // console.log("todos", todos);
  const _todos = todos.map((todo) => {
    return todo.id == todoId ? { ...todo, completed: !todo.completed } : todo;
  });

  // console.log("todos", todos);
  // todos = [..._todos];
  // console.log("_todos", _todos);
  // console.log("todoItems", todoItems);1
  todos = _todos;
  paintTodo(todos);
  saveTodo(todoId);
}

function paintTodo(todos) {
  console.log("todos", todos);
  console.log("todos", todos);
  todoList.innerHTML = null;
  // todos.forEach((todo) => {
  //   return paintTodos(todo);
  // });
  // if (todos.id == todos.id) {
  //   console.log("일치하는값?");
  //   todos = {...}
  // }
  // todos = [...todos, todos];
  // console.log("todos", todos);
  todos.forEach(paintTodos);
  // saveTodo();
}
// 클릭한 todoList를 함수의 매개변수로 넘겨주기

// day 클릭시 todo 보여주기
const dayTodo = function (year, month, day) {
  todoList.innerHTML = null;
  // _todos = [];
  // console.log("date", year, month + 1, day);
  // todo의 year, month, day가 같은 값을 찾아서 로컬스토리지에 있는 값으로 보여주기
  console.log("todos", todos);
  // const _todos = todos.filter((todo) => {
  //   // if (todo.day == day && todo.year == year && todo.month == month) {
  //   if (todo.month == month + 1 && todo.day == day && todo.year == year) {
  //     // console.log("todo.year", year, todo.year);
  //     // console.log("todo.month", month + 1, todo.month);
  //     // console.log("todo.day", day, todo.day);
  //     // console.log("todo", todo);
  //     // todo.day == day;
  //     return todo;
  //   }
  //   // return day == todo.day || month == todo.month || (year == todo.year) !== todo;
  // });
  todos.map((todo) => {
    if (todo.month == month + 1 && todo.day == day && todo.year == year) {
      todo.display = true;
      console.log("todo.display true", todo.display);
    } else {
      todo.display = false;
      console.log("todo.display false", todo.display);
    }
  });
  // todos = _todos;
  console.log("todos 캘린더 클릭값", todos);
  // } else {
  // console.log("todos 캘린더 클릭값 else", todos);
  // }
  // paintTodos(_todos);
  todos.forEach(paintTodos);
};

// todoItem1은 dayTodo에서 보내준 매개변수값
const paintTodos = function (todo) {
  // 새로고침했을때 todoItem을 매개변수로 받지 않으니 기본 데이터를 보여줘야함
  // if (newTodo == undefined) {
  //   // 배열을 복사
  //   newTodo = [...todos];
  // }
  // console.log("todoItem", todoItems);
  // todoList.innerHTML = null;
  // console.log("todos paintTodos", todos);

  // todoItems.forEach((todo) => {
  if (todo.display) {
    const li = document.createElement("li");
    li.classList.add("todo_item");
    const checkBox = document.createElement("div");
    const div = document.createElement("div");
    const button = document.createElement("button");
    checkBox.classList.add("todo_check");
    div.classList.add("todo_text");
    button.classList.add("todo_delete");

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
    // });
  }
};

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

  // const todoDay = `${todoDate.getFullYear()}년 ${todoDate.getMonth()}월 ${todoDate.getDay()}일`;
  const todoYear = date.getFullYear();
  const todoMonth = date.getMonth() + 1;
  const todoDay = date.getDate();

  // console.log("todos", todos);
  // 배열이 존재하지 않아서 id값을 찾을수 없었기 때문에 문제가 발생
  // const todoId = todos[length].id;
  // 마지막 요소의 id를 찾아!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // 너때문에 이렇게 오래 걸렸잫아 너는 블로그에 올릴꺼야 이 나쁜놈아
  let todoObj = {};
  if (length > 1) {
    const todoId = todos[length].id;
    todoObj = { content: todoValue, id: todoId + 1, completed: false, year: todoYear, month: todoMonth, day: todoDay, display: true };
    todos.push(todoObj);
  } else {
    const number = id++;
    todoObj = { content: todoValue, id: number, completed: false, year: todoYear, month: todoMonth, day: todoDay, display: true };
    todos.push(todoObj);
  }
  console.log("todos", todos);
  paintTodos(todoObj);
  saveTodo(todoObj);
}

todo.addEventListener("submit", todoSubmit);

const savedTodo = localStorage.getItem(TODOS);
console.log("savedTodo", savedTodo);
if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  console.log("parsedTodo", parsedTodo);
  todos = parsedTodo;
  console.log("todos", todos);
  console.log("todos", todos);
  parsedTodo.forEach(paintTodos);
}

export { paintTodos, dayTodo };
