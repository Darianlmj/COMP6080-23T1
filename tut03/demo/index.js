document.title = "To-Do List (Demo)";

const loginForm = document.querySelectorAll(".page-form")[0];
const toDoForm = document.querySelectorAll(".page-form")[1];
const usernameInput = document.querySelector("#username");
const logoutButton = document.querySelector("#logout-button");

// Get rid of that reload thing when the form submits
document.querySelectorAll(".page-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

loginForm.addEventListener("submit", () => {
  if (usernameInput.value) {
    const token = "Yay user has logged in";
    localStorage.setItem("token", token);
  }

  loginForm.style.display = "none";

  // #logout-button, #to-do-form
  logoutButton.style.display = "block";
  toDoForm.style.display = "block";
});

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("token");

  loginForm.style.display = "block";

  // #logout-button, #to-do-form
  logoutButton.style.display = "none";
  toDoForm.style.display = "none";
});

toDoForm.addEventListener("submit", () => {
  if (document.querySelector("#to-do-list") === null) {
    // Create this div
    const toDoList = document.createElement("div");
    toDoList.id = "to-do-list";
    document.querySelector("#form-header").appendChild(toDoList);
  }

  const toDoItemContainer = document.createElement("div");
  toDoItemContainer.className = "to-do-item-container";

  const checkbox = document.createElement("input");
  checkbox.className = "checkbox";
  checkbox.type = "checkbox";

  const toDoItem = document.createElement("p");
  toDoItem.innerHTML = document.querySelector("#to-do").value;

  toDoItemContainer.appendChild(checkbox);
  toDoItemContainer.appendChild(toDoItem);

  document.querySelector("#to-do-list").appendChild(toDoItemContainer);

  // Set input to nothing
  document.querySelector("#to-do").innerHTML = "";
});

document.querySelectorAll(".checkbox").forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    checkbox.parentElement.style.textDecoration = "line-through";
    checkbox.parentElement.style.textDecorationColor = "#00000099";
  });
});


