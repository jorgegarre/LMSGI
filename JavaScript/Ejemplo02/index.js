
const capa = document.getElementById("capa");
const boton_rojo = document.getElementById("boton_rojo");

boton_rojo.addEventListener("click", rojo);
boton_verde.addEventListener("click", verde);
boton_amarillo.addEventListener("click", amarillo);

function rojo() {
  capa.style.background = "red";
}

function verde() {
    capa.style.background = "green";
}

function amarillo() {
    capa.style.background = "yellow";
}
