function suma(x, y) {
  let numero = 0;
  return x + y;
}

console.log("La suma de 1 + 2 es ", suma(1, 2));

// ES6 nuevas caracteristicas

// Declaracino de variables con let y const
let numero = 0;
const letra = "A"; // el valor asiganado va a ser constante

// Template Strings
const x = "Alejo";
const simpleString = "Hola!! askjdhajshd";
const simpleString2 = "Hola!! " + x;
const templa = `Hola soy alejo
estoy muy contento
ahora estoy triste ${x}`;

// Functions de tipo flecha
function Hola() {
  console.log("Hola");
}

const HolaMundo = () => {
  console.log("Hola");
};

HolaMundo();

// Clases y herencias

class Padre {
  constructor() {}
}

class Hijo extends Padre {
  constructor() {}
}

// Promesas
// ____>

// Destructuring
// Definicion
let obj = { nombre: "Alejo", edad: 25 };

// Uso
console.log(obj.nombre);
console.log(obj.edad);

// Asignacion
let { nombre, edad } = obj;
console.log(nombre);
console.log(edad);

const miFuction = ({ nombre }) => {
  console.log(`El el nombre es: ${nombre}`);
};

miFucntion(obj);

// Valores por defecto
const otraFuncion = (valor = "Hola") => {
  console.log(valor);
};
otraFuncion();
