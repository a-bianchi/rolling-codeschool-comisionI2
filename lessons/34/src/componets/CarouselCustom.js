import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

function CarouselCustom(props) {
  const listado = props.listaImagenes || [];
  return (
    <div className="mb-5">
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {listado.map((elemento, index) => {
              if (index < 3) {
                return (
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={elemento.url} />
                    <Card.Body>
                      <Card.Title>{elemento.title}</Card.Title>
                      <Card.Text>
                        {elemento.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
              }
            })}
            {console.log(listado.length)}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {listado.map((elemento, index) => {
              if (index > 2 && index < 6) {
                return (
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={elemento.url} />
                    <Card.Body>
                      <Card.Title>{elemento.title}</Card.Title>
                      <Card.Text>
                        {elemento.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
              }
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {listado.map((elemento, index) => {
              if (index > 5 && index < 9) {
                return (
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={elemento.url} />
                    <Card.Body>
                      <Card.Title>{elemento.title}</Card.Title>
                      <Card.Text>
                        {elemento.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
              }
            })}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselCustom;
