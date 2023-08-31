import navbar from "./navigation/navbar";
import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";
import "./style.css";

function navHandler(e) {
  let pages = [home, menu, contact];
  let tab = document.getElementById(e.target.id);
  tab.parentElement.childNodes.forEach((element) => {
    element.classList.remove("nav-selected");
  });
  tab.classList.add("nav-selected");
  let body = document.querySelector(".body");
  body.innerHTML = "";
  pages[e.target.id.split("-")[1]]();
}
function addNavListener() {
  let navbar = document.querySelector(".nav");
  navbar.childNodes.forEach((e) => {
    e.addEventListener("click", navHandler);
  });
}

function init() {
  navbar();
  addNavListener();
  home();
}

init();
