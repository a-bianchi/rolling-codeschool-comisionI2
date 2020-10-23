import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lista: [],
      texto: "",
    };
  }

  agregarElementoEnListado = () => {
    const { texto, lista } = this.state;
    this.setState({ lista: [texto, ...lista] });
    return;
  };

  agregarTexto = (event) => {
    this.setState({
      texto: event.target.value,
    });
    return;
  };

  render() {
    const { lista } = this.state;
    return (
      <div>
        <p>Lista de tareas con Class</p>
        <input onChange={this.agregarTexto} />
        <button onClick={this.agregarElementoEnListado}>Insertar</button>
        {lista.map((tarea, indice) => (
          <p key={`lista-${indice}`}>{tarea}</p>
        ))}
      </div>
    );
  }
}

export default App;
