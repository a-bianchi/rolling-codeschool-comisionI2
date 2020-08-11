// Javascript Eventos

// Modelo basico
function saludo() {
  alert("Ola ke ase!!");
}

// Modelo Avanzado
document.getElementById("pepe").addEventListener("click", function (e) {
  alert("Clic en el tag p HOLA");
});

document.getElementById("carlitos").addEventListener("click", function (e) {
  alert("Clic en el div HOLAHOLA");
});

// Capturar
let boton = document.getElementById("otro");
boton.addEventListener("click", mostrarAlgo);
function mostrarAlgo(e) {
  console.log("Mi objeto" + e.target);
}

// formulario validacion
function validarUsuario() {
  alert("Valido usuario!!!");
}

function validarPasword() {
  alert("Valido passwrod!!!");
}
