const addButton = document.getElementById("addButton");
const inputToDo = document.getElementById("new-task");
const incompleteTasks = document.getElementById("incomplete-tasks");

const newToDo = (e) => {
  e.preventDefault();
  const listItem = document.createElement("li");
  const valueInput = inputToDo.value;
  const text = document.createTextNode(valueInput);
  listItem.appendChild(text);

  if (inputToDo === "") {
    alert("You must write something!");
  } else {
    incompleteTasks.appendChild(listItem);
  }
  inputToDo.value = "";

  const listText = document.createElement("span");
  const someText = document.createTextNode("todo: ");
  listText.className = "todos";
  listText.appendChild(someText);
  listItem.appendChild(listText);
  console.log(listItem);
};

addButton.addEventListener("click", newToDo);
