const loginForm = document.querySelector(".login_form");
const loginId = document.querySelector(".login_form input");

const greeting = document.querySelector(".greeting");

const USERNAME_KEY = "name";

function loginSubmit(event) {
  // form 유효성검사로 인한 새로고침 막기
  event.preventDefault();
  const name = loginId.value;
  loginForm.classList.add("hidden");
  localStorage.setItem(USERNAME_KEY, name);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", loginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log("savedUserName", savedUserName);

if (savedUserName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings();
}
