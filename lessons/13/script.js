// Partimos de un problema que es armar una lista de amigos y mostralos por consola

// Sin arreglos
var amigo1 = "Pepito1";
var amigo2 = "Pepito2";
var amigo3 = "Pepito3";

console.log(amigo1);
console.log(amigo2);
console.log(amigo3);

// Con arreglos podes hacerlo de la siguiente forma
var amigos = ["Pepito1", "Pepito2", "Pepito3", "Pepito4", "Pepito5", "Pepito6"];

for (var indice = 0; indice < amigos.length; indice++) {
  console.log(amigos[indice]);
}

// Metodos mas comunes para trabajar con arreglos

// Cantidad de elementos Arreglos
amigos.length; // Retorna un Number que represanta la cantidad de elementos del arreglo "amigos"

// Agregar un elemento al final del arreglo
amigos.push("Pepito7"); // Insertamos el string "Pepito7" al final del arreglo
console.log(amigos);

// Agrego un elemento al inicio del arreglo
amigos.unshift("Pepito0");
console.log(amigos);

// Ordenar arreglo de menor a mayor
amigos.sort(); // Devuelve el arreglo "amigos" ordenado de menor a mayor

// Invertir los elementos de un arreglo
amigos.reverse(); // Invertimos los elementos del arreglo amigos

// Ordenar arreglo de mayor a menor
console.log(amigos.sort().reverse()); // Usando los metodos anteriores podemos ordenar el arreglo de mayor a menor

// Tipos de variables
// Saber que tipo tiene una variable
var cantidad = 5;
var saludo = "Hola";
var condicion = true;
var objeto = { nombre: "Pepito1" };
var array = ["Pepito1"];
typeof cantidad; // number
typeof saludo; // String
typeof condicion; // Boolean
typeof objeto; // object
typeof array; // object
