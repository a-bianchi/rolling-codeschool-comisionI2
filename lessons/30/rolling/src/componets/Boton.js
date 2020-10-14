import React from "react";

function Boton(props) {
  const { nombre, action } = props;
  return <button onClick={action}>{nombre}</button>;
}

export default Boton;
