const botonMenu = document.querySelector(".hamburger"),
  body = document.querySelector("body");

// botonMenu hamburger
botonMenu.addEventListener("click", (e) => {
  botonMenu.classList.toggle("is-active");
});
