import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getTurnosInLocalStorage,
  setTurnoInLocalStorage,
} from "./utils/turnos";

function App() {
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      nombreDueno: "",
      fecha: "",
      hora: "",
      sintomas: "",
    },
    onSubmit: (values) => {
      setTurnoInLocalStorage(values);
      console.log(getTurnosInLocalStorage());
    },
  });
  return (
    <div>
      <Row>Turnos Clinica</Row>
      <Row>
        <Col>
          {" "}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                id="nombre"
                name="nombre"
                onChange={handleChange}
                value={values.nombre}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre dueño</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre Dueño"
                id="nombreDueno"
                name="nombreDueno"
                onChange={handleChange}
                value={values.nombreDueno}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Pedir
            </Button>
          </Form>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}

export default App;
