function resetFormulario() {
  boton[1].classList.add("boton1");
  boton[1].classList.remove("boton3");
  boton[1].textContent = "SIGUIENTE";

  label[0].textContent = "INGRESE SU NOMBRE";
  label[1].textContent = "INGRESE SU MAIL";
  label[2].textContent = "INGRESE SU NÚMERO DE TELÉFONO";

  input[0].style.backgroundImage = "none";
  input[1].style.backgroundImage = "none";
  input[2].style.backgroundImage = "none";

  input[0].style.border = "none";
  input[1].style.border = "none";
  input[2].style.border = "none";

  label[2].style.visibility = "visible";
  input[2].style.visibility = "visible";

  label.forEach((text) => {
    text.style.color = "rgb(255, 255, 255)";
  });
  input.forEach((valor) => {
    valor.value = "";
  });

  valores = [];
}

function mensajeValidacion(label, input, mensaje) {
  label.textContent = mensaje;
  label.style.color = "rgb(76, 255, 169)";
  input.style.backgroundImage = "url(./Img/Check1.svg)";
  input.style.backgroundPosition = "center right 0.5rem";
  input.style.backgroundRepeat = "no-repeat";
  input.style.backgroundSize = "5%";
  input.style.border = "solid 1px rgb(76, 255, 169)";
}

function mensajeError(label, input, mensaje) {
  label.textContent = mensaje;
  label.style.color = "rgb(247, 37, 135)";
  input.style.backgroundImage = "url(./Img/Check2.svg)";
  input.style.backgroundPosition = "center right 0.5rem";
  input.style.backgroundRepeat = "no-repeat";
  input.style.backgroundSize = "5%";
  input.style.border = "solid 1px rgb(247, 37, 135)";
}

const botonMenu = document.querySelector(".hamburger"),
  body = document.querySelector("body"),
  menu = document.querySelector(".cabecera__menu"),
  input = document.querySelectorAll(".inscrip__in"),
  label = document.querySelectorAll(".inscrip__la"),
  boton = document.querySelectorAll(".fiel__boton");

let valores = [];

// expreciones regulares
const reg0 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,20}$/,
  reg1 = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
  reg2 = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
  reg4 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{10,40}$/,
  reg5 = /^\d{5}(?:[-\s]\d{4})?$/;


// evento para abrir/cerrar el menú
botonMenu.addEventListener("click", (e) => {
  botonMenu.classList.toggle("is-active");
  menu.classList.toggle("menuDesativado");
});

body.addEventListener("click", (e) => {
  // evento para cerrar el menú al hacer clic en un enlace
  if (e.target.classList.contains("enlace__a")) {
    menu.classList.toggle("menuDesativado");
  }

  // validación de los campos de entrada al hacer clic en el botón1
  if (e.target.classList.contains("boton1")) {
    e.preventDefault();

    let valido = [false, false, false];

    if (reg0.test(input[0].value)) {
      mensajeValidacion(label[0], input[0], "NOMBRE VÁLIDO");
      valido[0] = true;
    } else {
      mensajeError(label[0], input[0], "NOMBRE NO VÁLIDO");
      valido[0] = false;
    }

    if (reg1.test(input[1].value)) {
      mensajeValidacion(label[1], input[1], "EMAIL VÁLIDO");
      valido[1] = true;
    } else {
      mensajeError(label[1], input[1], "EMAIL NO VÁLIDO");
      valido[1] = false;
    }

    if (reg2.test(input[2].value)) {
      mensajeValidacion(label[2], input[2], "NUMERO VÁLIDO");
      valido[2] = true;
    } else {
      mensajeError(label[2], input[2], "NUMERO NO VÁLIDO");
      valido[2] = false;
    }

    if (valido[0] == true && valido[1] == true && valido[2] == true) {
      input.forEach((valor) => {
        valores.push(valor.value);
      });

      label[0].textContent = "INGRESA TU DURACIÓN";
      label[1].textContent = "INGRESA TU CODIGO POSTAL";

      input[0].style.border = "none";
      input[1].style.border = "none";
      input[0].style.backgroundImage = "none";
      input[1].style.backgroundImage = "none";

      label[2].style.visibility = "hidden";
      input[2].style.visibility = "hidden";

      label.forEach((text) => {
        text.style.color = "rgb(255, 255, 255)";
      });

      boton[1].classList.remove("boton1");
      setTimeout(() => {
        boton[1].classList.add("boton3");
      }, 1000);

      boton[1].textContent = "ENVIAR";
      input.forEach((valor) => {
        valor.value = "";
      });
    }
  }

  if (e.target.classList.contains("boton2")) {
    e.preventDefault();
    resetFormulario();
  }

  if (e.target.classList.contains("boton3")) {
    e.preventDefault();
    let valido = [false, false];

    if (reg4.test(input[0].value)) {
      mensajeValidacion(label[0], input[0], "DIRECCIÓN VALIDA");
      valido[0] = true;
    } else {
      mensajeError(label[0], input[0], "DIRECCIÓN NO VALIDA");
      label[0].style.color = "rgb(247, 37, 135)";
      valido[0] = false;
    }

    if (reg5.test(input[1].value)) {
      mensajeValidacion(label[1], input[1], "CÓDIGO POSTAL VALIDO");
      valido[1] = true;
    } else {
      mensajeError(label[1], input[1], "CÓDIGO POSTAL NO VALIDO");
      valido[1] = false;
    }

    if (valido[0] == true && valido[1] == true) {
      valores.push(input[0].value);
      valores.push(input[1].value);

      console.log(valores);
      const divElement = document.createElement("div"),
        bonton = document.createElement("button"),
        p1 = document.createElement("p"),
        p2 = document.createElement("p"),
        p3 = document.createElement("p"),
        p4 = document.createElement("p"),
        p5 = document.createElement("p");

      p1.textContent = `Nombre: ${valores[0]}`;
      p2.textContent = `Mail: ${valores[1]}`;
      p3.textContent = `Teléfono: ${valores[2]}`;
      p4.textContent = `Dirección: ${valores[3]}`;
      p5.textContent = `Código Postal: ${valores[4]}`;
      divElement.textContent = `Infomacion Eviada`;

      divElement.classList.add("informacion");
      bonton.classList.add("informacion__boton");

      divElement.appendChild(p1);
      divElement.appendChild(p2);
      divElement.appendChild(p3);
      divElement.appendChild(p4);
      divElement.appendChild(p5);

      divElement.appendChild(bonton);
      bonton.textContent = "CERRAR";

      body.appendChild(divElement);
    }
  }

  if (e.target.classList.contains("informacion__boton")) {
    e.preventDefault();
    const informacion = document.querySelector(".informacion");
    informacion.classList.add("fade-out");
    setTimeout(() => {
      informacion.remove();
    }, 1000); // esperar 1000ms para que termine la animación
    resetFormulario();
  }
});
