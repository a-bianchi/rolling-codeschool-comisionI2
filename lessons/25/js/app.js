// Json y LocalStorage
console.log("Soy el archivo app.js");

// Borrar localstorage
localStorage.clear();

const usuario = {
  username: "Pepe",
  password: "1234",
};

// Serializar a json
const json = JSON.stringify(usuario);

//Guardo mi usuario en localstorage
localStorage.setItem("usuario1", json);

// Guardar otro usuario de forma chancha
localStorage.setItem(
  "usuario2",
  JSON.stringify({ username: "Marito", password: "1234" })
);

// Recupero usuario de localstorage
const usuario1 = localStorage.getItem("usuario1");

// Deserializar a objeto javascript
const usuario1Objeto = JSON.parse(usuario1);
console.log("Nombre de usuario: ", usuario1Objeto.username);
console.log("Contraseña: ", usuario1Objeto.password);

// Guardar arreglo
localStorage.setItem(
  "listado",
  JSON.stringify([{ nombre: "Yerba" }, { nombre: "Leche" }])
);

// Recupero listado de localstorage
const listado = JSON.parse(localStorage.getItem("listado"));
console.log("Listado: ", listado);
console.log("Primer elemento: ", listado[0]);
