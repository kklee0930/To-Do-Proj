const toDo = document.querySelector("#jsToDo");
const toDoInput = document.querySelector("#jsToDoInput");
const toDoList = document.querySelector("#jsToDoList");

let toDos = [];

function addToDo(event) {
  event.preventDefault();
  const toDoValue = toDoInput.value;
  toDoInput.value = "";

  const toDoInputValue = {
    text: toDoValue,
    id: Date.now(),
  };

  toDos.push(toDoInputValue);
  //   const getToDo = localStorage.getItem("toDos");
  saveToDo();
  printToDo(toDoInputValue);
}

function saveToDo() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

const getToDo = localStorage.getItem("toDos");

function printToDo(toDoInputValue) {
  //   localStorage.getItem("toDos", toDos);
  const li = document.createElement("li");
  li.id = toDoInputValue.id;
  const span = document.createElement("span");
  span.innerText = toDoInputValue.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";

  deleteButton.addEventListener("click", removeToDo);

  li.appendChild(span);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
}

function removeToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

toDo.addEventListener("submit", addToDo);

if (getToDo !== null) {
  const parsedToDos = JSON.parse(getToDo);
  //   console.log(parsedToDos);
  toDos = parsedToDos;
  //   console.log(toDos);
  toDos.forEach((item) => printToDo(item));
}
