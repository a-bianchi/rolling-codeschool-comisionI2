// OOP

// Crear un objeto

// Object create

// var a = 'hola';
// console.log(a)
// var alumno = new Object()
// alumno.nombre = "Nombre"
// console.log(alumno)

// var alumno2 = Object.create(alumno)

// console.log(alumno2)

// Notacion literal
// var alumno = {
//   nombre: "Alejo",
//   edad: 35,
//   pago: true,
//   clases: ["FullStack", "Costura"],
// };

// //delete alumno.pago

// console.log(alumno.clases[0])

// Fucion contructora

// function Alumno(nombre, edad, pago, clases) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.pago = pago;
//   this.clases = clases;
// }
// var alumno1 = new Alumno("Alejo", 35, true, ["Costura"]);

// var alumno2 = new Alumno("Martin", 53, false, ["FullStack"])

// // console.log(alumno1)
// // console.log(alumno2)

// Listado de amigos
// function amigo(nombre, edad, pago) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.pago = pago;
// }

// var amigo1 = new amigo("Pepe1", 23, true);
// var amigo2 = new amigo("Pepe1", 23, true);

// // Los objetos se guardan por referencia por
// // este motivo un objeto con los mismo valores no es igual
// // console.log(amigo1 == amigo2)
// // console.log(amigo1 === amigo2)

// function ticket(numero, fecha, valor, nombre, objectoAlgo) {
//   this.numero = numero;
//   this.fecha = fecha;
//   this.valor = valor;
//   this.nombre = nombre;
//   this.otroObjeto = otroObjeto;
// }

// var otroObjeto = {
//   saludo: "Hola mundo!!",
// };

// var ticket1 = new ticket("1", "20/09/2020", "$120", "Arjona", otroObjeto); // object
// var ticket2 = new ticket("2", "25/09/2020", "$240", "Panam", otroObjeto); // object
// var ticket3 = new ticket("3", "28/09/2020", "$550", "Rata Blanca", otroObjeto); // object

// //console.log(ticket1.nombre)

// var listado = [ticket1, ticket2, ticket3]; // array
//  indice =      0   ,    1   ,   2

// var objectoTicket1 = listado[0] // ticket1
// // objectoTicker1 = ticket1
// var objectoTicket2 = listado[1] // ticket2
// // objectoTicker2 = ticket2
// var objectoTicket3 = listado[2] // ticket3
// // objectoTicker3 = ticket3

// console.log(objectoTicket1.nombre)
// console.log(objectoTicket2.nombre)
// console.log(objectoTicket3.nombre)

// for (var indice = 0; indice < listado.length; indice++) {
//   //console.log(listado[indice].nombre + " " + listado[indice].valor)
//   console.log(listado[indice].otroObjeto.saludo);
// }
