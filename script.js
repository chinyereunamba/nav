const html = document.getElementsByTagName("body");
const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".nav");
const btn = document.querySelector(".contact-btn");

const navGroup = document.createElement("div");
navGroup.className = "navgroup";
window.onresize = function () {
  if (document.documentElement.clientWidth <= 800) {
    if (navGroup in navbar) {
      console.log("It's there");
    } else {
      navGroup.appendChild(nav);
      navGroup.appendChild(btn);
      navbar.appendChild(navGroup);
    }
  } else {
    if (navGroup.children == null) {
      console.log("Not here");
    } else {
      console.log(navbar.children);
      navbar.removeChild(document.querySelector(".navgroup"));
      navbar.appendchild(nav);
      navbar.appendChild(btn);
    }
  }
  console.log(document.documentElement.clientWidth);
  console.log(navGroup);
  console.log(navbar);
};
