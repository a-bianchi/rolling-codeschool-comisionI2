import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";

const CardDetalle = (props) => {
  const { turno, indice, funcionEliminar } = props;
  return (
    <>
      <Card key={indice} style={{ width: "20rem" }}>
        <Card.Header>Tuno {turno.id}</Card.Header>
        <Card.Body>
          <Card.Title>Detalle</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Nombre de Dueño: {turno.nombreDueno}</ListGroupItem>
            <ListGroupItem>Nombre de Mascota: {turno.nombre}</ListGroupItem>
            <ListGroupItem>Fecha: {turno.fecha}</ListGroupItem>
            <ListGroupItem>Hora: {turno.hora}</ListGroupItem>
            <ListGroupItem>Sintomas: {turno.sintomas}</ListGroupItem>
          </ListGroup>
          <Button variant="danger" onClick={funcionEliminar}>
            Borrar
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

CardDetalle.propTypes = {
  indice: PropTypes.number,
  turno: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string.isRequired,
    nombreDueno: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired,
  }),
  funcionEliminar: PropTypes.func,
};

export default CardDetalle;
