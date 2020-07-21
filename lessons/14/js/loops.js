// Loop o bucle

/*
for (declaración1; declaración2; declaración3) {
  // código que se va a ejecutar
}
*/
var array = ["Pepito1", "Pepito2", "Pepito3"];
for (var indice = 0; indice < array.length; indice++) {
  //console.log(array[indice]);
}

// Recorrer un objeto iterable

/**
 for (variable of iterable) {
  // code block to be executed
}
 */
var texto = "Hola Mundo";
// [ "H", "o", "l", ...... ]
for (carcter of texto) {
  //console.log(carcter);
}

// Objeto iterable
var persona = {
  nombre: "Alejo",
  edad: 13,
  altura: "1.5mt",
  equipo: "saca chispas",
};
// console.log(persona.edad);
// ["nombre", "edad", ....]
for (atributo in persona) {
  // console.log(atributo);
  //console.log(persona[atributo]);
}

// While (Mientras)

/* 
  while(condition) {
    // code block to be executed
  }
*/

var amigos = ["Pepito1", "Pepito2", "Pepito3", "Pepito4", "Pepito5"];
var indice = 0;
while (indice < amigos.length) {
  //console.log(amigos[indice]);
  indice++;
}

// Do While (Mientras)

/* 
  do{
    // code block to be executed
  }while(condition) 
*/

var amigos = ["Pepito1", "Pepito2", "Pepito3", "Pepito4", "Pepito5"];
var indice = 0;
do {
  console.log(amigos[indice]);
  indice++;
} while (indice < amigos.length);
