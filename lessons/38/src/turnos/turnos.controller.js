const turnos = require("./turnos.models");

const getTurnos = async (req, res) => {
  try {
    const todosLosTurnos = await turnos.find();
    res.send({ data: todosLosTurnos });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const getOneTurno = async (req, res) => {
  try {
    const turno = await turnos.findById(req.params.id);
    res.send({ data: turno });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const insertarTurno = async (req, res) => {
  const response = await new turnos(req.body).save();
  res.send(response);
};

const modificarTurno = async (req, res) => {
  const respuesta = await turnos.updateOne({ _id: req.params.id }, req.body);
  res.send({ data: respuesta });
};

const eliminarTurno = async (req, res) => {
  const respuesta = await turnos.deleteOne({ _id: req.params.id });
  res.send({ data: respuesta });
};

module.exports = {
  getTurnos,
  getOneTurno,
  insertarTurno,
  modificarTurno,
  eliminarTurno,
};
