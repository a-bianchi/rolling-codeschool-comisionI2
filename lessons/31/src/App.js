import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valorInput: "",
      listado: [],
    };
  }

  cambioValorInput(input) {
    this.setState({
      valorInput: input,
    });
  }

  agregarItem(item) {
    let arreglo = this.state.listado;
    arreglo.push(item);
    this.setState({
      valorInput: "",
      listado: arreglo,
    });
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => {
            this.cambioValorInput(e.target.value);
          }}
          value={this.state.valorInput}
          type={"text"}
        />
        <button onClick={() => this.agregarItem(this.state.valorInput)}>
          Agregar Item{" "}
        </button>
        <ul>
          {this.state.listado.map((item, index) => (
            <li key={`${index}-key`}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
