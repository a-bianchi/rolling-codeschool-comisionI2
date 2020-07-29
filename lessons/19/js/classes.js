// Herencia
class Producto {
  constructor(nombre, precio, cantidad, tipo) {
    this._nombre = nombre;
    this._precio = precio;
    this._cantidad = cantidad;
    this._tipo = tipo;
  }

  get nombre() {
    return this._nombre;
  }

  get precio() {
    return this._precio;
  }

  get cantidad() {
    return this._cantidad;
  }

  get tipo() {
    return this._tipo;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set precio(newPrecio) {
    this._precio = newPrecio;
  }

  set cantidad(newCantidad) {
    this._cantidad = newCantidad;
  }

  set tipo(newTipo) {
    this._tipo = newTipo;
  }

  sumarIvaRermarca(newPrecio) {
    console.log("Entre al metodo sumarIvaRemarca");
    var conIva = this._precio * 1.21;
    return conIva + newPrecio;
  }
}

class Lacteo extends Producto {
  constructor(nombre, precio, cantidad, tipo, vencimiento) {
    super(nombre, precio, cantidad, tipo);
    this._vencimiento = vencimiento;
  }

  get vencimiento() {
    return this._vencimiento;
  }

  set vencimiento(newVencimiento) {
    this._vencimiento = newVencimiento;
  }

  vencio() {
    if (this._vencimiento === "27/07/2020") {
      return "Vencido!!!";
    } else {
      return "Todo peola!!";
    }
  }
}

var producto1 = new Producto("Galletas", 120, 10, "Panificado");
console.log(producto1);
console.log(producto1.sumarIvaRermarca(50));

// Herencia

var leche1 = new Lacteo("Dulce de Leche", 200, 1, "Lacteo", "27/07/2020");
// console.log(leche1);

// console.log(leche1.vencio());
// var nombre = "";

// function Saludo() {
//   console.log("Hola");
// }

// function SaludoAalguien(nombre, apellido, edad, peso) {
//   console.log("Nombre: " + nombre);
//   console.log("Apellido: " + apellido);
//   console.log("Edad: " + edad);
//   console.log("Peso: " + peso);
// }

// function sumar(numero1, numero2) {
//   if (numero1 !== undefined && numero2 !== undefined) {
//     return numero1 + numero2;
//   } else {
//     return "Error: no puedo sumar undefined!!";
//   }
// }

// var resultado = sumar(1, 2);
// console.log("Resultado: " + resultado);
//SaludoAalguien("Alejo", "Perez", 78, 45);
