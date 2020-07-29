// OOP

// variable de referencia del objeto persona1
// var persona1 = { nombre: "Juan" };

// // variable de referencia del objeto persona2
// var persona2 = { nombre: "Juan" };

// console.log(persona1 == persona2); // retorna false
// console.log(persona1 === persona2); // retorna false

// Crear una clase

// Listado de amigos
// function amigo(nombre, edad, pago) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.pago = pago;
// }

// var amigo1 = new amigo("Alejo", 35, true);
// console.log(amigo1);
// var amigo2 = new amigo("Martin", 24, false);
// console.log(amigo2);

// Delete propiedad objeto
// var persona = { nombre: "Alejo", edad: 34 };
// console.log(persona);
// delete persona.edad;
// console.log(persona);

// Crear objeto y metodo

// function Persona(nombre, apellido, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;

//   this.saludo = function () {
//     console.log("Hola q a c? Amigouw!!");
//   };
// }

// Recorrer las propiedades de un objeto
// var auto = {
//   color: "verde",
//   marca: "fiat",
//   modelo: "bravo",
//   año: 2008,
//   potencia: "130bhp",
// };

// var llaves = Object.keys(auto);
// for (var i = 0; i < llaves.length; i++) {
//   var llave = llaves[i];
//   console.log(auto[llave]);
// }

// for (var llave in auto) {
//   //console.log(llave);
//   if (auto.hasOwnProperty(llave)) {
//     console.log(auto[llave]);
//   }
// }

// var persona1 = new Persona("Alejo", "Narjana", 34);
// console.log(persona1.saludo());

// Crear una clase con metodos setters y getters
class Persona {
  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    //console.log("Ejecute el contructor!!");
  }

  get nombreComple() {
    return this._nombre + " " + this._apellido;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  static miMetodoEstatico() {
    return "Soy un metodo statico";
  }

  saludo() {
    console.log("Hola amigacho!!!");
  }

  sumaleUnoAMiEdad() {
    var suma = this._edad + 1;
    console.log("La edad mas 1 es: " + suma);
  }
}

// Metodo definido como static, lo puedo usar sin instanciar el objeto
//var text = Persona.miMetodoEstatico();
//console.log(text);

var persona1 = new Persona("Martin", "Popsi", 24);
var persona2 = new Persona("Martin", "Popsi", 24);

var persona3 = persona1;

console.log(persona1 == persona2);
console.log(persona1 === persona2);
console.log(persona3 === persona1);
// console.log(persona1);
// console.log(persona2);
// persona1._nombre = "Pepito";
// delete persona2._edad;
// console.log(persona1);
// console.log(persona2);
// persona1.nombre = "Alejo";
// console.log(persona1);

// Aceder a un objeto
// var persona = {
//   nombre: "Alejo",
//   edad: 35,
//   hijos: [
//     { nombre: "Tina", edad: 2 },
//     { nombre: "Lola", edad: 1, cuentos: { nombre: "Un cuento", cantidad: 2 } },
//   ],
// };

// console.log("El nombre es: " + persona.hijos[1].cuentos.cantidad);
