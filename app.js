const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      ul.classList.toggle("show");
    })
  );

 
