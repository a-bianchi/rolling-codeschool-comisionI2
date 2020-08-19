// Json y LocalStorage

// Forma literal de crear un objeto
const persona = {
  nombre: "Alejo",
  edad: 36,
  actividad: null,
};

// Json
/* {
  "nombre": "Alejo",
  "edad": 36,
  "actividad": null,
  "numero": 00123, // No se puede!!
  "numero": 123
 }
 */

// Serializar objeto javascript a json
const json = JSON.stringify(persona);
//console.log("Json: ", json);

// Deserializar json a objeto javascript
const objetojs = JSON.parse(json);
//console.log("Objeto javascript: ", objetojs);

//console.log("Nombre: ", objetojs.nombre);

// LocalStorage

// Borra toda la informacion del localstorage
localStorage.clear();
// Guardar en local storage
localStorage.setItem("nombre", "Alejo");
const usuario = "Martin";
// Recupera informacion de localstorage
const storage = localStorage.getItem("nombre");
// storage.length
console.log("Nombre: ", storage);
console.log("Usuario: ", usuario);
