const button = document.getElementById("login-button");
const closeButton = document.getElementById("closePopup");
const loginButton = document.getElementById("login-submitButton");

function login() {
  const passInput = document.getElementById("passwordInput").value;

  if (passInput == "skender") {
    closePopup();
    scrollToSection();
    openEdit();
  } else {
    alert("Netacno");
  }
}

function selectDiv(id, toggle) {
  const divider = document.getElementById(id);
  const dividers = document.querySelectorAll(".edit-popup__posts");

  if (toggle) {
    if (divider.classList.contains("colorChange")) {
      divider.classList.remove("colorChange");
    } else {
      for (let i = 0; i < dividers.length; i++) {
        dividers[i].classList.remove("colorChange");
      }
      divider.classList.add("colorChange");
    }
  } else {
    for (let i = 0; i < dividers.length; i++) {
      if (dividers[i].id === id) {
        dividers[i].classList.add("colorChange");
      } else {
        dividers[i].classList.remove("colorChange");
      }
    }
  }
}

function scrollToSection() {
  const section1 = document.getElementById("title-posts-section");
  section1.scrollIntoView();
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
