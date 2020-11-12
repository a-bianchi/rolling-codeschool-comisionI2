import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import FormularioTurno from "./FormularioTurno";
import { actualizarTurno } from "../utils/turnos";
import PropTypes from "prop-types";

const CardDetalle = (props) => {
  const { turno, indice, funcionEliminar } = props;
  return (
    <>
      <Card key={indice} style={{ width: "20rem" }}>
        <Card.Header>Turno {turno.id}</Card.Header>
        <Card.Body>
          <Card.Title>Detalle</Card.Title>
          <ListGroup className="list-group-flush">
            <FormularioTurno
              turno={turno}
              buttonName={"Actualizar"}
              handlerTurno={async (values) => {
                values.id = turno.id;
                await actualizarTurno(values);
              }}
            />
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
