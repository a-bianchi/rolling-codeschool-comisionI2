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
        <div class='card mt-5' style='width: 25rem; background-color: #e7e7e7;'>
            <img src='${producto._imagen}' class='card-img-top' />
            <div class='card-body'>
              <h5 class='card-title'>${producto._nombre}</h5>
              <p class='card-text'>Precio: ${producto._precio}</p>
              <p class='card-text'>Tipo: ${producto._tipo}</p>
            </div>
            <a href="#" class="btn btn-danger btn-block" name="Eliminar">Eliminar</a>
          </div>
    `;
    listadoProductos.appendChild(elemento);
  }

  mostrarMensaje(mensaje, clase) {
    const div = document.createElement("div");
    div.className = clase;
    //<div class="alert alert-success"></div>
    div.appendChild(document.createTextNode(mensaje));
    //<div class="alert alert-success"> Mensaje  </div>
    const divMensaje = document.getElementById("miMensaje");
    divMensaje.appendChild(div);

    setTimeout(function () {
      //document.querySelector(".alert").remove(); Es equivalente a  document.getElementsByClassName("alert")[0].remove();
      document.getElementsByClassName("alert")[0].remove();
    }, 1000);
  }

  eliminarProducto(elemento) {
    elemento.target.parentElement.remove();
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

    vista.mostrarMensaje(
      "El producto se cargo exitosamente!!",
      "alert alert-success"
    );
    vista.agregarProducto(productoElemento);

    e.preventDefault();
  });

document.getElementById("lista").addEventListener("click", function (e) {
  const vista = new Vista();
  vista.mostrarMensaje(
    "El producto fue eliminado exitosamente!!",
    "alert alert-danger"
  );
  vista.eliminarProducto(e);
});
