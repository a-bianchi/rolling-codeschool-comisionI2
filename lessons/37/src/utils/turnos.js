const axios = require("axios");
const url = "http://localhost:3000";

const generarId = async () => {
  const respuesta = await axios.get(`${url}/turnos?_order=desc&limit=1`);
  console.log(respuesta);
  return respuesta.data.id + 1;
};

const getTurnos = async () => {
  try {
    const respuesta = await axios.get(`${url}/turnos`);
    return respuesta.data;
  } catch (error) {
    console.log("Error ", error);
  }
};

const setTurno = async (turno) => {
  try {
    turno.id = await generarId();
    await axios.post(`${url}/turnos`, turno);
    return await getTurnos();
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
    await axios.delete(`${url}/turnos/${id}`);
    return await getTurnos();
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

export { getTurnos, setTurno, eliminarTurno, getTurnosPorId, actualizarTurno };
