import React, { Component } from "react";
import "./App.css";
import Title from "./componets/Title";
import Boton from "./componets/Boton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("asd");
    this.setState({ contador: 6 });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title nombre={"Martin"} />
          <Boton action={this.handleClick} nombre={"Soy un boton"} />
          <p>{this.state.contador}</p>
        </header>
      </div>
    );
  }
}

export default App;
