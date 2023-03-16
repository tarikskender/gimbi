const button = document.getElementById("login-button");
const closeButton = document.getElementById("closePopup");
const loginButton = document.getElementById("login-submitButton");

function login() {
  const passInput = document.getElementById("passwordInput").value;

  if (passInput == "skender") {
    alert("Tacno");
  } else {
    alert("Netacno");
  }
}

function openPopup() {
  const popup = document.getElementById("login-popup");

  popup.classList.add("visibility");
}

function closePopup() {
  const popup = document.getElementById("login-popup");

  popup.classList.remove("visibility");
}

button.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
loginButton.addEventListener("click", login);
