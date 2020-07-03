// Metodos comunes string
var nombre = "Alejo";
// ["A", "l", "e", "j", "o"]

// Cuantos letra tiene
//console.log(nombre.length);

// En que posicion es la primer ocurrencia
var str = "alejo@gmail.com";
// ["a", "l", "e" , "j", "o", "@", ......]
// [0,    1,   2,    3,   4,   5,  ..... ] Posicion
//console.log(str.indexOf("@"));

// Devolver un substring con una posincial y una posfinal
var email = "alejo@gmail.com";
// ["a", "l", "e" , "j", "o", "@", ......]
// [ 0,   1,   2,    3,   4,   5,  ..... ] Posicion
var posinicial = 2;
var posfinal = 5;
//console.log(email.substring(posinicial, posfinal));

// Devolver un substring con una
var email = "alejo@gmail.com";
// ["a", "l", "e" , "j", "o", "@", ......]
// [ 0,   1,   2,    3,   4,   5,  ..... ] Posicion
var posinicial = 2;
var cantidadElementos = 3;
//console.log(email.substr(posinicial, cantidadElementos));

// Cambiar un string a tipo number
var edad = "13";
//console.log(typeof edad);
var edadNumber = Number(edad);
//console.log(typeof edadNumber);
// Cambiar un number a tipo string
var edadString = toString(edadNumber);
//console.log(typeof edadString);

// Remplazar un texto por otro
var texto = "La chancha y pepita";
var cadenaBuscada = "pepita";
var remplazo = "manuela";
var cambio = texto.replace(cadenaBuscada, remplazo);
//console.log(cambio);

// Pasar cadena de texto a todos sus caracteres a mayuscula
var texto = "La chancha y pepita";
var todoMayuscula = texto.toUpperCase();
console.log(todoMayuscula);

// Pasar cadena de texto a todos sus caracteres a minuscula
var todoMinuscula = texto.toLowerCase();
console.log(todoMinuscula);

// Concatenar dos strings
var nombre = "Martin";
var text = " es re copado!";
console.log(nombre.concat(text));
// Equivalente uso el operador +
console.log(nombre + text);
