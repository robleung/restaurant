import "./style.css";

function navHandler(e) {
  let tab = document.getElementById(e.target.id);
  tab.parentElement.childNodes.forEach((element) => {
    element.classList.remove("nav-selected");
  });
  tab.classList.add("nav-selected");

  //render home, menu or contact contents
}

// move to function
let content = document.querySelector(".content");
let nav = document.createElement("div");
nav.classList.add("nav");
let home = document.createElement("div");
home.innerText = "Home";
home.id = "nav-0";
home.classList.add("nav-selected");
home.addEventListener("click", navHandler);
let menu = document.createElement("div");
menu.innerText = "Menu";
menu.id = "nav-1";
menu.addEventListener("click", navHandler);
let contact = document.createElement("div");
contact.innerText = "Contact";
contact.id = "nav-2";
contact.addEventListener("click", navHandler);
nav.append(home, menu, contact);
content.append(nav);
