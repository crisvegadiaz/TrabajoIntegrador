const botonMenu = document.querySelector(".hamburger"),
  body = document.querySelector("body"),
  menu = document.querySelector(".cabecera__menu"),
  enlace =document.querySelector(".menu__enlace");

// botonMenu hamburger
botonMenu.addEventListener("click", (e) => {
  botonMenu.classList.toggle("is-active");
  menu.classList.toggle("menuDesativado");
  
});

// enlace.addEventListener("click", (e) =>{
//   menu.classList.toggle("menuDesativado");
//   botonMenu.classList.toggle("is-active");
//   console.log("si")
// })



body.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu__enlace")) {
    menu.classList.toggle("menuDesativado");
    console.log("si")
  }
});
