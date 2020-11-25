const usuarios = require("./usuarios.models.js");

const getUsuarios = async (req, res) => {
  try {
    const respuesta = await usuarios.find();
    res.send({ data: respuesta });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const saludos = async (req, res) => {
  try {
    res.send({ data: "Hola!!!" });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = { getUsuarios, saludos };
