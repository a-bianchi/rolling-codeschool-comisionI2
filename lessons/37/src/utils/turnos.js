const axios = require("axios");
const url = "http://localhost:3000";

const generarId = async () => {
  const respuesta = await axios.get(`${url}/turnos?_order=desc&limit=1`);
  return respuesta.data.id + 1;
};

const getTurnos = async () => {
  try {
    const respuesta = await axios.get(`${url}/turnos?_sort=id&_order=desc`);
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

const setTurno = async (turno) => {
  try {
    turno.id = await generarId();
    return await axios.post(`${url}/turnos`, turno);
  } catch (error) {
    console.log("Error ", error);
  }
};

const actualizarTurno = async (turno) => {
  try {
    const respuesta = await axios.put(`${url}/turnos/${turno.id}`, turno);
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

const eliminarTurno = async (id) => {
  try {
    return await axios.delete(`${url}/turnos/${id}`);
  } catch (error) {
    console.log("Error ", error);
  }
};

const getTurnosPorId = async (id) => {
  try {
    const respuesta = await axios.get(`${url}/turnos/${id}`);
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

const validarTurnos = async (turno) => {
  try {
    const respuesta = await axios.get(
      `${url}/turnos?nombre_like=${turno.nombre}&nombreDueno_like=${turno.nombreDueno}`
    );
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

export {
  getTurnos,
  setTurno,
  eliminarTurno,
  getTurnosPorId,
  actualizarTurno,
  validarTurnos,
};
