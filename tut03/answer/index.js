document.title = "To Do List";

const loginForm = document.querySelectorAll(".page-form")[0];
const toDoForm = document.querySelectorAll(".page-form")[1];
const usernameInput = document.getElementById("username");
const logoutButton = document.getElementById("logout-button");

document.querySelectorAll(".page-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

loginForm.addEventListener("submit", () => {
  if (usernameInput.value) {
    // Create a token for the user
    const token = "Yay user is successfully logged in";
    localStorage.setItem("token", token);

    // Hide the login form
    loginForm.style.display = "none";

    // Show the logout button and the to-do form
    logoutButton.style.display = "block";
    toDoForm.style.display = "block";
  }
});

logoutButton.addEventListener("click", () => {
  // Remove the token from localStorage
  localStorage.removeItem("token");

  // Hide the logout button and the to-do-form
  logoutButton.style.display = "none";
  toDoForm.style.display = "none";

  // Show the login form
  loginForm.style.display = "block";
});

toDoForm.addEventListener("submit", () => {
  if (document.getElementById("to-do-list") === null) {
    const toDoList = document.createElement("div");
    toDoList.id = "to-do-list";
    document.getElementById("form-header").appendChild(toDoList);
  }
  // Append to the to-do-list form
  const toDoItemContainer = document.createElement("div");
  toDoItemContainer.className = "to-do-item-container";

  const checkbox = document.createElement("input");
  checkbox.className = "to-do-checkbox";
  checkbox.type = "checkbox";

  const toDoItem = document.createElement("p");
  toDoItem.innerText = document.getElementById("to-do").value;

  toDoItemContainer.appendChild(checkbox);
  toDoItemContainer.appendChild(toDoItem);

  document.getElementById("to-do-list").appendChild(toDoItemContainer);

  // Reset the form input
  document.getElementById("to-do").value = "";

  // Event listener for the checkbox
  document.querySelectorAll(".to-do-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      checkbox.parentElement.style.textDecoration = "line-through";
      checkbox.parentElement.style.textDecorationColor = "#00000099";
    });
  });
});
