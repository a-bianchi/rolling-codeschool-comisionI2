// Login
console.log("Se cargo el archivo usuario.js");

// Clase Usuario
class Usuario {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  get username() {
    return this._username;
  }

  static validarUsername(username) {
    if (username.length > 3) {
      return true;
    } else {
      return false;
    }
  }

  static validarPassword(password) {
    // password = "1234@"
    // Metodo serach("string") busca un string en otro string
    // Si lo encuentra devuelve la posicion y si no lo encuentra devuelve -1
    if (password.search("@") === -1) {
      return true;
    } else {
      return false;
    }
  }

  existeUsuario() {
    const usuarios = JSON.parse(localStorage.getItem("users"));
    for (var indice = 0; indice < usuarios.length; indice++) {
      if (
        this._username === usuarios[indice].username &&
        this._password === usuarios[indice].password
      ) {
        return true;
      }
    }
    return false;
  }
}

console.log("SessionStorage: ", sessionStorage.getItem("session"));

function checkUsername() {
  const username = document.getElementById("inputUsername").value;
  // Es equivalente => if(!Usuario.validarUsername(username))
  if (Usuario.validarUsername(username) === false) {
    alert("El nombre de usuario debe tener mas de 3 caracteres!!!");
  }
}

function checkPassword() {
  const password = document.getElementById("inputPassword").value;
  // Es equivalente => if(!Usuario.validarUsername(username))
  if (Usuario.validarPassword(password) === false) {
    alert("El password no debe contener @!!!");
  }
}

const evento = document
  .getElementById("formLogin")
  .addEventListener("submit", function (e) {
    const username = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;

    const usuario = new Usuario(username, password);

    if (usuario.existeUsuario()) {
      console.log("El usuario es correcto!!!");
      localStorage.setItem("login", "true");
      window.location =
        "http://127.0.0.1:5500/lessons/27/agregar-producto.html";
    } else {
      alert("Usuario no existe!!!");
    }

    e.preventDefault();
  });

// Vamos a tener dos usuarios

// Perifiles
// cliente => ver peliculas / login /
// administrador => agregar pelicular / login / tabla peliculas /
