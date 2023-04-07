const botonMenu = document.querySelector(".hamburger"),
  body = document.querySelector("body"),
  menu = document.querySelector(".cabecera__menu");

// botonMenu hamburger
botonMenu.addEventListener("click", (e) => {
  botonMenu.classList.toggle("is-active");
  menu.classList.toggle("menuDesativado");
});

body.addEventListener("click", (e) => {
  // botonMenu hamburger
  if (e.target.classList.contains("enlace__a")) {
    menu.classList.toggle("menuDesativado");
  }
  // FÓRMULA INSCRIPCIÓN
  if(e.target.classList.contains("boton1")) {
    e.preventDefault();
    const input = document.querySelectorAll(".inscrip__in"),
          label = document.querySelectorAll(".inscrip__la");

    let reg0 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,20}$/,
        reg1 = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
        reg2 = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    if(reg0.test(input[0].value)){
      label[0].textContent="✅ NOMBRE VÁLIDO";
      label[0].style.color="rgb(76, 255, 169)";
    }else{
      label[0].textContent="❌ NOMBRE NO VÁLIDO";
      label[0].style.color="rgb(247, 37, 135)";
    }

    if(reg1.test(input[1].value)){
      label[1].textContent="✅ EMAIL VÁLIDO";
      label[1].style.color="rgb(76, 255, 169)";
    }else{
      label[1].textContent="❌ EMAIL NO VÁLIDO";
      label[1].style.color="rgb(247, 37, 135)";
    }

    if(reg2.test(input[2].value)){
      label[2].textContent="✅ NUMERO VÁLIDO";
      label[2].style.color="rgb(76, 255, 169)";
    }else{
      label[2].textContent="❌ NUMERO NO VÁLIDO";
      label[2].style.color="rgb(247, 37, 135)";
    }
    
  }
});
