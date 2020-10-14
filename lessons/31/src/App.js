import React, { Component } from "react";
import { Button, ListGroup, Container, Row, Image } from "react-bootstrap";
import NavBarCustom from "./NavBarCustom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valorInput: "",
      listado: [],
      saludo: "asdjhaksjd",
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
      <Container>
        <NavBarCustom titulo={"Mi props!"} />
        <Row>
          <h4>To Do List</h4>
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgAuE3mJdpv0%2Fmaxresdefault.jpg&f=1&nofb=1"
            width={171}
            height={180}
            roundedCircle
          />
        </Row>
        <Row>
          <input
            onChange={(e) => {
              this.cambioValorInput(e.target.value);
            }}
            value={this.state.valorInput}
            type={"text"}
          />
          <Button
            variant="primary"
            onClick={() => this.agregarItem(this.state.valorInput)}
          >
            Agregar Item
          </Button>
        </Row>
        <Row>
          <ListGroup>
            {this.state.listado.map((item, index) => (
              <ListGroup.Item key={`${index}-key`}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default App;
