const button = document.getElementById("login-button");
const closeButton = document.getElementById("closePopup");
const loginButton = document.getElementById("login-submitButton");

function login() {
  const passInput = document.getElementById("passwordInput").value;

  if (passInput == "skender") {
    closePopup();
    openEdit();
  } else {
    alert("Netacno");
  }
}

function openPopup() {
  const popup = document.getElementById("login-popup");
  const backdrop = document.getElementById("backdrop-filter");

  backdrop.classList.add("visibility");
  popup.classList.add("visibility");
  disableScroll();
}

function closePopup() {
  const popup = document.getElementById("login-popup");
  const backdrop = document.getElementById("backdrop-filter");

  backdrop.classList.remove("visibility");
  popup.classList.remove("visibility");
  enableScroll();
}

function openEdit() {
  const popup = document.getElementById("edit-popup");

  const backdrop = document.getElementById("backdrop-filter");

  backdrop.classList.add("visibility");
  popup.classList.add("visibility");
  disableScroll();
}

button.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
loginButton.addEventListener("click", login);

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}
