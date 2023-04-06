const botonMenu = document.querySelector(".hamburger"),
  body = document.querySelector("body"),
  menu = document.querySelector(".cabecera__menu");

// botonMenu hamburger
botonMenu.addEventListener("click", (e) => {
  botonMenu.classList.toggle("is-active");
  menu.classList.toggle("menuDesativado");
});

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("enlace__a")) {
    menu.classList.toggle("menuDesativado");
    console.log("si");
  }
});
