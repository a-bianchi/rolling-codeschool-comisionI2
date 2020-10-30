const getTurnosInLocalStorage = () => {
  const listTurnos = localStorage.getItem("turnos");
  console.log(listTurnos);
  return JSON.parse(listTurnos);
};

const setTurnoInLocalStorage = (turno) => {
  let turnos = localStorage.getItem("turnos")
    ? JSON.parse(localStorage.getItem("turnos"))
    : [];
  turnos.push(turno);
  localStorage.setItem("turnos", JSON.stringify(turnos));
  console.log(turnos);
};

export { getTurnosInLocalStorage, setTurnoInLocalStorage };
