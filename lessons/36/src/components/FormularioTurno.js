import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setTurnoInLocalStorage } from "../utils/turnos";
import PropTypes from "prop-types";

const FormularioTurno = (props) => {
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
    },
  });
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre Mascota</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre Mascota"
          id="nombre"
          name="nombre"
          onChange={handleChange}
          value={values.nombre}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nombre Dueño</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre Dueño"
          id="nombreDueno"
          name="nombreDueno"
          onChange={handleChange}
          value={values.nombreDueno}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="text"
          placeholder="Fecha"
          id="fecha"
          name="fecha"
          onChange={handleChange}
          value={values.fecha}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Hora</Form.Label>
        <Form.Control
          type="text"
          placeholder="Hora"
          id="hora"
          name="hora"
          onChange={handleChange}
          value={values.hora}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Sintomas</Form.Label>
        <Form.Control
          type="text"
          placeholder="Sintomas"
          id="sintomas"
          name="sintomas"
          onChange={handleChange}
          value={values.sintomas}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {props.buttonName}
      </Button>
    </Form>
  );
};

FormularioTurno.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default FormularioTurno;
