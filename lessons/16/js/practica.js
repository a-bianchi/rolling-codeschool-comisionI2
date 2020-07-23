// Ejercicios Javascript Variables

// 1) Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
//alert("un mensaje");

// 2) Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// document.write("Hello Word </br> Hola salte");
// document.write("<p> Hello Word 2</p>");
// document.write("<h1> Soy un h1</h1>");

// 3) Lo dejo a tu criterio

// 4) Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// var nombre = prompt("Nombre de usuario?");
// document.write(nombre);

// 5) Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// var numero1 = prompt("Ingrese un numero:");
// var numero2 = prompt("Ingrese un numero:");
// document.write(parseInt(numero1) + parseInt(numero2));

// 9) Escribe un programa que pida una frase y escriba las vocales que aparecen
// Resuleto clase 17/7
// Nota: Tener en cuenta la función length y substr.

// var frase = prompt("Escriba una frase:");
// // frase = "alejo"
// // frase = ["a", "l", "e", "j", "o"]
// var a = 0;
// var variable;
// for (indice in frase) {
//   if (frase[indice] === 'a' || frase[indice] === 'A') {
//     a++
//   }
// }
// console.log(variable)
// console.log("Cantidad de letras A: " + a)
// var nombre = "alejo naranja";
// var array = ["alejo", "martin"];
// console.log("Cuantos elementos tiene: " + array.length)
// console.log(array[0])
// console.log("Cuantos caracteres tiene: " + nombre.length)


// Ejercicios Javascript bucles(loops)

// 1) Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
// var edad = prompt("Edad:");
// if (parseInt(edad) >= 18) {
//   alert("Ya puede conducir");
// } else {
//   alert("No es un numero valido");
// }

// 2) Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// Evaluar en casa!!!
// var nota = parseInt(prompt("Ingrese nota:"));

// if (nota > 10 || nota < 0) {
//   alert("Numero erroneo!!!");
// }

// switch (nota) {
//   case 1:
//   case 2:
//   case 0:
//     alert("Muy deficiente");
//     break;
//   case (3, 4):
//     alert("Insuficiente");
//     break;
//   case (5, 6):
//     alert("Suficiente");
//     break;
// }

// 6) Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// Resuleto clase 17/7
// var n = 0;
// var numeroQueseyo = 0;
// for (var x = 0; x <= 30; x++) {
//   n++;
//   numeroQueseyo;
// }
