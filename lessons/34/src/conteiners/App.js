import React from "react";
import "./App.css";
import { Jumbotron, Button } from "react-bootstrap";
import NavBarCustom from "../componets/NavBarCustom";
import CarouselCustom from "../componets/CarouselCustom";

function App() {
  const listaImagenes = [
    {
      url: "https://i.ytimg.com/vi/dGqZxBvOfA0/maxresdefault.jpg",
      alt: "gatito",
      title: "Gatito tierno",
      description: "Un gatito tierno gritando.",
    },
    {
      url:
        "https://www.asimplevista.com/wp-content/uploads/2019/02/1210-1410x793.jpg",
      alt: "perrito",
      title: "Perrito tierno",
      description: "Un perrito tierno saludando.",
    },
    {
      url: "https://i.ytimg.com/vi/dGqZxBvOfA0/maxresdefault.jpg",
      alt: "gatito",
      title: "Gatito tierno",
      description: "Un gatito tierno gritando.",
    },
  ];
  return (
    <div className="App">
      <NavBarCustom />
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <h1>Categoria 1</h1>
      <CarouselCustom listaImagenes={listaImagenes} />
    </div>
  );
}

export default App;
