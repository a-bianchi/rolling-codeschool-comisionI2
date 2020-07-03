/*
Ejercicio de lógica utilizando while
Los padres de una niña le prometieron darle 10 dólares cuando cumpliera 12 años de edad 
y duplicar el regalo en cada cumpleaños subsiguiente hasta que el regalo no excediera 1000 dólares. 
Escriba un programa para determinar qué edad tendrá la niña cuando se le dé la última cantidad y 
la cantidad total recibida.
*/

// Pre condiciones
var edad = 12;
var dolares = 10;

// Contador
var regalo = 10;

while (regalo <= 1000) {
  dolares = dolares * 2;
  regalo = regalo + dolares;
  edad++;
}

console.log("La plata regala: " + dolares);
console.log("Total regalado: " + regalo);
console.log("Edad de la niña: " + edad);

/*
Ejercicio de lógica utilizando loop puede ser for o while
Determinar en un conjunto de  números naturales:
var conjunto = [1,34, 5, 78, 11, 2, 23, 6, 7, 8, 2, 3, 79]
¿ Cuántos son menores que 15 ?
¿ Cuántos son mayores que 50 ?
¿ Cuántos están en el rango entre 25 y 45 ?

a.- Números menores a 15, un contador, lo denominaremos c15.
b.- Números mayores a 50, contador que se será c50.
c.- Números entre 25 y 45,  un contador se llamará c_rango.

*/
