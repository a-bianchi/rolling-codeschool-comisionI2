const generarId = () => {
  const listTurnos = localStorage.getItem("turnos");
  if (!listTurnos) return 1;
  const listTurnoObject = JSON.parse(listTurnos);
  return JSON.parse(listTurnos);
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
};

const eliminarTurnosInLocalStorage = (id) => {
  const listTurnos = localStorage.getItem("turnos");
  if (!listTurnos) return;
  const listTurnoObject = JSON.parse(listTurnos);
  return;
};

export { getTurnosInLocalStorage, setTurnoInLocalStorage };
