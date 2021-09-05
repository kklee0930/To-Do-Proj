const logInForm = document.querySelector("#jsId");
const logInUser = document.querySelector("#jsInputName");
const userGreetings = document.querySelector("#jsHello");
const logOutUser = document.querySelector("#jsLogout");
const toDoConsole = document.querySelector("#jsToDo");
const toDoList_ = document.querySelector("#jsToDoList");
const welcome = document.querySelector("#Welcome");
const starter = document.querySelector("#starter");
const body_ = document.querySelector("body");
const weather = document.querySelector("#jsWeather");
const display = document.querySelector("#display");
const clock = document.querySelector("#jsClock");
// const logInSubmit = document.querySelector("#jsSubmit");

// const getUsername = localStorage.getItem("username");

function logIn(event) {
  event.preventDefault();
  const LogInInput = logInUser.value;
  saveUser(LogInInput);
}

function saveUser(LogInInput) {
  logInForm.classList.add("hidden");
  localStorage.setItem("username", LogInInput);
  printUser(LogInInput);
}

function cssControlOn() {
  body_.style.flexDirection = "row";
  body_.style.justifyContent = "center";
  starter.style.display = "flex";
  starter.style.flexDirection = "column";
}
function cssControlOff() {
  body_.style.flexDirection = "column";
  body_.style.justifyContent = "none";
  starter.style.display = "none";
  starter.style.flexDirection = "none";
}

function printUser(LogInInput) {
  toDoConsole.classList.remove("hidden");
  logOutUser.classList.remove("hidden");
  toDoList_.classList.remove("hidden");
  welcome.classList.add("hidden");
  starter.classList.remove("startPhase");
  cssControlOff();
  userGreetings.innerText = `Hello ${LogInInput}!`;
  display.prepend(clock);
  display.prepend(weather);
}

function logOut() {
  localStorage.removeItem("username");
  logInForm.classList.remove("hidden");
  welcome.classList.remove("hidden");
  userGreetings.innerText = "";
  logOutUser.classList.add("hidden");
  toDoConsole.classList.add("hidden");
  toDoList_.classList.add("hidden");
  starter.classList.add("startPhase");
  cssControlOn();
  starter.prepend(clock);
  starter.prepend(weather);
}
const getUsername = localStorage.getItem("username");

if (getUsername === null) {
  toDoList_.classList.add("hidden");
  logInForm.addEventListener("submit", logIn);
  starter.classList.add("startPhase");
  display.classList.remove("displayPhase");
  cssControlOn();
} else {
  logInForm.classList.add("hidden");
  printUser(getUsername);
}

logOutUser.addEventListener("click", logOut);
