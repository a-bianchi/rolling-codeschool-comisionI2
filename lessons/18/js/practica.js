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

// Crear objeto y metodo

// function Persona(nombre, apellido, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;

//   this.saludo = function () {
//     console.log("Hola q a c? Amigouw!!");
//   };
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

  saludo() {
    console.log("Hola amigacho!!!");
  }

  sumaleUnoAMiEdad() {
    var suma = this._edad + 1;
    console.log("La edad mas 1 es: " + suma);
  }
}

var persona1 = new Persona("Martin", "Popsi", 24);
console.log(persona1);
persona1.nombre = "Alejo";
console.log(persona1);
