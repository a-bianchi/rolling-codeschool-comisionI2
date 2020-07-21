var menu = "Opcion5";

// If
if (edad == 24) {
  //console.log("La edad es igual a 24");
} else {
  //console.log("La edad no es igual a 24");
}

var edad = 24;
var nombre = "Alejo";
var nombreTodoEnMayuscula = nombre.toUpperCase();
var nombreTodoEnMinuscula = nombre.toLocaleLowerCase();

var dinero = "10";
var deuda = 10;
// Evaluar por valor
if (dinero == deuda) {
  //console.log("Evaluar por valor");
}
// Evaluar por valor y tipo
if (dinero === deuda) {
  console.log("Evaluar por valor y tipo");
}

// If and && --- Si (condicion1 es verdad Y condicion2 es vedadera) entonces console.log
if (edad == 23 && nombre == "Alejo") {
  //console.log("Hola Alejo entro por el And");
} else {
  //console.log("Salgo por el false por el And");
}

// If or || --- Si (condicion1 es verdad Y condicion2 es vedadera) entonces console.log
if (edad == 23 || nombre == "Alejo") {
  //console.log("Hola Alejo entro por el Or");
} else {
  //console.log("Salgo por el false");
}

// Switch
switch (menu) {
  case "Opcion1":
    console.log("Soy opcion 1");
    break;
  case "Opcion2":
    console.log("Soy opcion 2");
    break;
  case "Opcion3":
    console.log("Soy opcion 3");
    break;
  default:
  //console.log("Entra si no se cumple ninguna de las anteriores");
}
//console.log("Sali del switch");
