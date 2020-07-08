function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;

  if (name == null || name == "") {
    alert("Nombre no puede estar vacio");
    return false;
  } else if (password.length < 6) {
    alert("El password no puede ser menor que 6 caracteres");
    return false;
  }
}

function action() {
  const name = document.getElementById("name");
  const span = document.getElementById("error");
  console.log(name.value);
  span.textContent = "Soy un error";
}

/// document.getElementById("name")
// document.getElementsByTagName("p")
