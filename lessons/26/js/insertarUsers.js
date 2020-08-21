// Login
console.log("Se cargaron los usuarios");

localStorage.clear();

const users = [
  { username: "Alejo", password: "123456" },
  { username: "Martin", password: "123456" },
  { username: "Pepe", password: "123456" },
];

// Serializar objeto javascript a json
const jsonUsers = JSON.stringify(users);

localStorage.setItem("users", jsonUsers);

const usuariosObjeto = localStorage.getItem("users");

// Deserializar json a objeto javascript
console.log(JSON.parse(usuariosObjeto));
