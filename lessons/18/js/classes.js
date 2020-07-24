// Herencia
class Libro {
  constructor(titulo, autor, editorial, precio) {
    this._titulo = titulo;
    this._autor = autor;
    this._editorial = editorial;
    this._precio = precio;
  }

  get titulo() {
    return this._titulo;
  }

  get autor() {
    return this._autor;
  }

  get editorial() {
    return this._editorial;
  }

  get precio() {
    return this._precio;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }

  set editorial(nuevaEditorial) {
    this._editorial = nuevaEditorial;
  }

  set precio(nuevoPrecio) {
    this._precio = nuevoPrecio;
  }

  sumameIva() {
    return this._precio * 1.21;
  }

  saludo() {
    console.log("Hola Libro");
  }
}

class Comic extends Libro {
  constructor(titulo, autor, editorial, precio, foto) {
    super(titulo, autor, editorial, precio);

    this._foto = foto;
  }

  saludo() {
    super.saludo();
    console.log("Hola Comic");
  }
}

class CarritoCompras {
  constructor() {
    this.productos = [];
  }

  cargarProductos(cantidad, precio) {
    var objetoNuevo = {
      cantidad,
      precio,
    };
    this.productos.push(objetoNuevo);
  }

  total() {
    var total = 0;
    var subtotal = 0;
    for (var index = 0; index < this.productos.length; index++) {
      subtotal = this.productos[index].cantidad * this.productos[index].precio;
      total = total + subtotal;
    }
    return total;
  }
}

var libro1 = new Libro("La biblia", "Jebus", "Cuchuflito", 15);
var comic1 = new Comic(
  "Spider Man",
  "Estante Lee",
  "Marvel",
  300,
  "html:/alguna foto"
);
console.log(comic1.saludo());
// var carrito1 = new CarritoCompras();
// carrito1.cargarProductos(2, libro1.precio);
// carrito1.cargarProductos(2, comic1.precio);
// console.log(carrito1.total());
