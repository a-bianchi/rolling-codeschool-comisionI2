import React, { useState, useEffect } from "react";
import LoginUserForm from "./components/LoginUserForm";
const App = () => {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState("");
  const [user, setUser] = useState({});

  const agregarElementoEnListado = () => {
    setLista([texto, ...lista]);
  };

  const agregarTexto = (event) => {
    setTexto(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <p>Lista de tereas con Hooks</p>
      <input onChange={agregarTexto} />
      <button onClick={agregarElementoEnListado}>Insertar</button>
      {lista.map((elemento, indice) => (
        <p key={`lista-${indice}`}>{elemento}</p>
      ))}
      <LoginUserForm />
    </div>
  );
};

export default App;
