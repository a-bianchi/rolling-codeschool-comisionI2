import React, { Component } from "react";
import { Container, Row, Button, Alert } from "react-bootstrap";
import TableUsuarios from "../components/TableUsuarios";
import TitleTable from "../components/TitleTable";
import ListaCustom from "../components/ListaCustom"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 2,
      posts: [],
    };
  }

  getUsuarios(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => this.setState({ posts: json }))
      .catch((error) => {
        console.log(error);
      });
  }

  cambioValorInput(userId) {
    this.setState({ userId: userId });
  }

  buscarUsuario() {
    this.getUsuarios(this.state.userId);
  }

  componentDidMount() {
    this.getUsuarios(this.state.userId);
  }

  render() {
    const { posts } = this.state;
    return (
      <Container>
        <Row>
          <input
            onChange={(e) => {
              this.cambioValorInput(e.target.value);
            }}
            type={"text"}
          ></input>
          <Button
            variant="primary"
            onClick={() => {
              this.buscarUsuario();
            }}
          >
            Buscar Usuario
          </Button>
        </Row>
        <Row>
          <TitleTable title={"Estoy en la pagina de administracion"} />
          {posts.length > 0 ? (
            <TableUsuarios posts={posts} />
          ) : (
              <Alert variant={"danger"}>
                No existen posts para ese usuario!!!{" "}
              </Alert>
            )}
        </Row>
      </Container>
    );
  }
}

export default App;
