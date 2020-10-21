import React from "react";
import "./App.css";
import { Jumbotron, Button } from "react-bootstrap";
import CarouselCustom from "../componets/CarouselCustom";
import CarouselCopado from "../componets/CarouselCopado";

function Home() {
  const helloWord = () => {
    setTimeout(() => {
      console.log("Hola mundo");
    }, 1000);
  };

  function helloWord2(value) {
    console.log(value);
  }
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
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDDbqW6AkNwIUlVlwSZ_1LxbnNqBPTkJx6pQ&usqp=CAU",
      alt: "gatito",
      title: "Gatito tierno",
      description: "Un gatito tierno gritando.",
    },
    {
      url:
        "data:image/jpeg;base64,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",
      alt: "gatito",
      title: "Gatito tierno",
      description: "Un gatito tierno gritando.",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYi8Z016zkz2NjOK0QlRsnZ9tpOJvJJ741ww&usqp=CAU",
      alt: "perrito",
      title: "Perrito tierno",
      description: "Un perrito tierno saludando.",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzao55jQJYiw7aDRS4VGSBuhO8-A5YVsBi0A&usqp=CAU",
      alt: "gatito",
      title: "Gatito tierno",
      description: "Un gatito tierno gritando.",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHpZgXuLhMYkFXgOrFkLD-HjCc_VueyUMEiA&usqp=CAU",
      alt: "gatito",
      title: "Gatito tierno",
      description: "Un gatito tierno gritando.",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWmTsgtvR6AUbs8yyP_qE6RSAs1NW1Vx40hg&usqp=CAU",
      alt: "perrito",
      title: "Perrito tierno",
      description: "Un perrito tierno saludando.",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjAeUx4wrst08gQwW9MoWoTCLGgU2otE6Wsg&usqp=CAU",
      alt: "gatito",
      title: "Gatito tierno",
      description: "Un gatito tierno gritando.",
    },
  ];
  return (
    <div className="App">
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <input onChange={(e) => helloWord2(e.target.value)}></input>{" "}
          <Button onClick={helloWord} variant="primary">
            Learn more
          </Button>
        </p>
      </Jumbotron>
      <h1>Categoria 1</h1>
      <CarouselCopado listado={listaImagenes} />
      <CarouselCopado listado={listaImagenes} />
      <CarouselCopado listado={listaImagenes} />
    </div>
  );
}

export default Home;
