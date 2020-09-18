import React, { Component } from "react";
import Listado from "./Listado";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fecha: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.actualizar(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  actualizar() {
    this.setState({
      fecha: new Date(),
    });
  }

  render() {
    return (
      <div>
        <div>Hola chicos</div>
        <p>{this.state.fecha.toLocaleTimeString()}</p>
        <Listado titulo={"Soy un titulo canchero!!"} />
      </div>
    );
  }
}

export default App;
