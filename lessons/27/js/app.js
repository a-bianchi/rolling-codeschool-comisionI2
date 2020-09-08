// Mock conexion a base de datos
class Basedatos {
  constructor(conexion, nombre) {
    this._conexion = conexion;
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

// Listado
class Lista {
  constructor() {
    this._lista = [];
  }

  get lista() {
    return this._lista;
  }

  agregar(producto) {
    this._lista.push(producto);
  }

  filtrarPorTipo(tipo) {
    let nuevoListado = [];
    if (tipo === "Todos") {
      return this._lista;
    }
    for (var posicion = 0; posicion < this._lista.length; posicion++) {
      if (this._lista[posicion]._tipo === tipo) {
        nuevoListado.push(this._lista[posicion]);
      }
    }
    return nuevoListado;
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

function logout() {
  console.log("Logout");
  localStorage.setItem("login", "false");
  window.location = "http://127.0.0.1:5500/lessons/27/index.html";
}

window.setTimeout(() => {
  localStorage.setItem("login", "false");
  alert("La sesion expiro!!!");
}, 300000);

sessionStorage.setItem("session", "Hola mundo");
console.log("SessionStorage:", sessionStorage.getItem("session"));

let login = localStorage.getItem("login");
if (login !== "true") {
  window.location = "http://127.0.0.1:5500/lessons/27/index.html";
}

const vista = new Vista();
const listaProducto = new Lista();
const productoYerba = new Producto(
  "Adelga Mate",
  120,
  "Almacen",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F4bOwlEEGfV759W1KQVSpQHaHZ%26pid%3DApi&f=1"
);
const productoGaseo = new Producto(
  "Coca Cola",
  140,
  "Gaseosa",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ub13aVaEG0LO45tIm3pa4gHaHa%26pid%3DApi&f=1"
);

listaProducto.agregar(productoYerba);
listaProducto.agregar(productoGaseo);

for (producto of listaProducto.lista) {
  vista.agregarProducto(producto);
}

document.getElementById("formulario").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value,
    precio = document.getElementById("precio").value,
    tipo = document.getElementById("tipo").value,
    imagen = document.getElementById("imagen").value;

  const productoElemento = new Producto(nombre, precio, tipo, imagen);

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

document.getElementById("filtro").addEventListener("change", function (e) {
  document.getElementById("lista").innerHTML = "";
  const filtro = document.getElementById("filtro").value;
  let listaNueva = listaProducto.filtrarPorTipo(filtro);

  for (producto of listaNueva) {
    vista.agregarProducto(producto);
  }

  e.preventDefault();
});
