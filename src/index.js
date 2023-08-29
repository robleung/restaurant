import "./style.css";

let content = document.querySelector(".content");
let nav = document.createElement("div");
nav.classList.add("nav");
let home = document.createElement("div");
home.innerText = "Home";
home.classList.add("nav-selected");
let menu = document.createElement("div");
menu.innerText = "Menu";
let contact = document.createElement("div");
contact.innerText = "Contact";
nav.append(home, menu, contact);
content.append(nav);
