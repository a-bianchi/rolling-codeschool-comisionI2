// Metodos comunes a number

// Cambiar de tipo string a tipo number
var edadString = "13";
var edadNumber = Number(edadString);
//console.log(typeof edadNumber);

// Que pasa si le paso un estring que no tiene valor numero ?
var texto1 = "10,3"; // No es un numero
var texto2 = "10.3"; // Si es un numero
var seaNumber1 = Number(texto1);
var seaNumber2 = Number(texto2);
//console.log(seaNumber1);
//console.log(seaNumber2);

// Pasar numero con coma a entero
var numero1 = 10.3;
//console.log(parseInt(numero1));

// Redonedeo
var numero2 = 10.9;
//console.log(Math.round(numero2));

// Aleatorios
console.log(Math.random());
