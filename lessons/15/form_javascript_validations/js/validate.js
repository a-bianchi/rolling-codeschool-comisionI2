function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;
  var email = document.myform.email.value;
  var edad = document.myform.edad.value;
  var error = document.getElementById("error");

  error.textContent = "";

  if (name == "") {
    error.textContent = "Nombre no puede estar vacio";
    return false;
  }

  if (password.length < 6) {
    error.textContent = "El password no puede ser menor que 6 caracteres";
    return false;
  }

  if (email == "") {
    error.textContent = "El email no tiene que ser vacio";
    return false;
  }

  // if (parseInt(edad) === NaN) {
  //   error.textContent = "El campo edad tiene que ser tipo numero";
  //   return false;
  // }

  error.textContent = "";
}

/// document.getElementById("name")
// document.getElementsByTagName("p")
