const generarId = () => {
  const listTurnos = localStorage.getItem("turnos");
  if (!listTurnos) return 1;
  const arrayTurnos = JSON.parse(listTurnos);
  if (arrayTurnos.length === 0) return 1;
  const ultimoIndex = arrayTurnos.length - 1;
  return arrayTurnos[ultimoIndex].id + 1;
};

const getTurnosInLocalStorage = () => {
  const listTurnos = localStorage.getItem("turnos");
  return JSON.parse(listTurnos);
};

const setTurnoInLocalStorage = (turno) => {
  turno.id = generarId();
  let turnos = localStorage.getItem("turnos")
    ? JSON.parse(localStorage.getItem("turnos"))
    : [];
  turnos.push(turno);
  localStorage.setItem("turnos", JSON.stringify(turnos));
  return turnos;
};

const eliminarTurnosInLocalStorage = (id) => {
  const listTurnos = localStorage.getItem("turnos");
  if (!listTurnos) return;
  const arrayTurnos = JSON.parse(listTurnos);
  const nuevoArraySinElemento = arrayTurnos.filter((turno) => turno.id !== id);
  console.log(nuevoArraySinElemento);
  localStorage.setItem("turnos", JSON.stringify(nuevoArraySinElemento));
  return nuevoArraySinElemento;
};

const getTurnosPorId = (id) => {
  const listTurnos = localStorage.getItem("turnos");
  if (!listTurnos) return;
  const arrayTurnos = JSON.parse(listTurnos);
  return arrayTurnos.find((item) => item.id === id);
};

export {
  getTurnosInLocalStorage,
  setTurnoInLocalStorage,
  eliminarTurnosInLocalStorage,
  getTurnosPorId,
};
