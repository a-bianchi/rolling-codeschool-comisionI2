// Persona
class Persona {
  constructor(nombre, edad, clase) {
    this._nombre = nombre;
    this._edad = edad;
    this._clase = clase;
  }

  //set

  //
  mostrarGeneracion() {
    if (this._clase >= 1994 && this._clase <= 2010) {
      return "Generaxion Z, Irreverencia";
    }
    if (this._clase >= 1981 && this._clase <= 1993) {
      return "Generaxion Y, Frustracion";
    }
    if (this._clase >= 1969 && this._clase <= 1980) {
      return "Generaxion X, Obsesion por el exito";
    }
    if (this._clase >= 1949 && this._clase <= 1968) {
      return "Baby Boom, Ambicion";
    }
    if (this._clase >= 1930 && this._clase <= 1948) {
      return "Silent Generation, Austeridad";
    }
    return "Sos generacion K!!!";
  }

  esMayorDeEdad() {
    if (this._edad >= 18) {
      return true;
    }
    return false;
  }

  mostrarDatos() {
    return {
      nombre: this._nombre,
      edad: this._edad,
      clase: this._clase,
    };
  }
}
console.log("hola");

var persona = new Persona();

document.getElementById("formulario").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const clase = document.getElementById("clase").value;

  console.log("Persona", persona.mostrarDatos());

  e.preventDefault();
});

function generacion() {
  persona.mostrarGeneracion();
}

function esMayor() {
  persona.esMayorDeEdad();
}
