// Mock conexion a base de datos
class Basedatos {
  constructor(coenxion, nombre) {
    this._coenxion = coenxion;
    this._nombre = nombre;
  }

  agregarProducto(producto) {
    // agregar un producto a la base de datos
  }
}

// Productos
class Producto {
  constructor(nombre, precio, tipo, imagen) {
    this._nombre = nombre;
    this._precio = precio;
    this._tipo = tipo;
    this._imagen = imagen;
  }
}

class Vista {
  agregarProducto(producto) {
    const listadoProductos = document.getElementById("lista");
    const elemento = document.createElement("div");
    elemento.innerHTML = `
        <div class='card' style='width: 25rem;'>
            <img src='${producto._imagen}' class='card-img-top' />
            <div class='card-body'>
              <h5 class='card-title'>${producto._nombre}</h5>
              <p class='card-text'>Precio: ${producto._precio}</p>
              <p class='card-text'>Tipo: ${producto._tipo}</p>
            </div>
          </div>
    `;
    listadoProductos.appendChild(elemento);
  }
}

const evento = document
  .getElementById("formulario")
  .addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value,
      precio = document.getElementById("precio").value,
      tipo = document.getElementById("tipo").value,
      imagen = document.getElementById("imagen").value;

    const productoElemento = new Producto(nombre, precio, tipo, imagen);

    const base = new Basedatos("123.12.23.4", "ProductosDb");

    base.agregarProducto(productoElemento);

    const vista = new Vista();

    vista.agregarProducto(productoElemento);

    e.preventDefault();
  });
