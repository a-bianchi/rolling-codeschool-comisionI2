import React, { useState } from "react";

const App = () => {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState("");

  const agregarElementoEnListado = () => {
    setLista([texto, ...lista]);
  };

  const agregarTexto = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <p>Lista de tereas con Hooks</p>
      <input onChange={agregarTexto} />
      <button onClick={agregarElementoEnListado}>Insertar</button>
      {lista.map((elemento, indice) => (
        <p key={`lista-${indice}`}>{elemento}</p>
      ))}
    </div>
  );
};

export default App;
