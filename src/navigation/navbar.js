function navbar() {
  let content = document.querySelector(".content");
  let navbar = document.createElement("div");
  navbar.classList.add("nav");
  let home = document.createElement("div");
  home.innerText = "Home";
  home.id = "nav-0";
  home.classList.add("nav-selected");
  //   home.addEventListener("click", navHandler);
  let menu = document.createElement("div");
  menu.innerText = "Menu";
  menu.id = "nav-1";
  //   menu.addEventListener("click", navHandler);
  let contact = document.createElement("div");
  contact.innerText = "Contact";
  contact.id = "nav-2";
  //   contact.addEventListener("click", navHandler);
  navbar.append(home, menu, contact);
  let body = document.createElement("div");
  body.classList.add("body");
  content.append(navbar, body);
}

export default navbar;
