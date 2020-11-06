import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object({
  nombre: Yup.string()
    .max(60, "No puede contener mas de 60 caracateres!!!")
    .required("El nombre de la mascota es requerido!!!"),
  nombreDueno: Yup.string()
    .max(60, "No puede contener mas de 60 caracateres!!!")
    .required("El nombre del dueño es requerido!!!"),
  fecha: Yup.string().required("El fecha es requerido!!"),
  hora: Yup.string().required("El fecha es requerido!!"),
  sintomas: Yup.string()
    .max(200, "No puede contener mas de 60 caracateres!!!")
    .required("El sintomas es requerido!!"),
});

const FormularioTurno = (props) => {
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      nombreDueno: "",
      fecha: "",
      hora: "",
      sintomas: "",
    },
    validationSchema,
    onSubmit: (values) => {
      props.guardarEnLocalStorage(values);
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
        {errors.nombre ? (
          <div style={{ color: "red" }}>{errors.nombre}</div>
        ) : null}
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
        {errors.nombreDueno ? (
          <div style={{ color: "red" }}>{errors.nombreDueno}</div>
        ) : null}
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
        {errors.fecha ? (
          <div style={{ color: "red" }}>{errors.fecha}</div>
        ) : null}
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
        {errors.hora ? <div style={{ color: "red" }}>{errors.hora}</div> : null}
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
        {errors.sintomas ? (
          <div style={{ color: "red" }}>{errors.sintomas}</div>
        ) : null}
      </Form.Group>
      <Button variant="primary" type="submit">
        {props.buttonName}
      </Button>
    </Form>
  );
};

FormularioTurno.propTypes = {
  buttonName: PropTypes.string.isRequired,
  guardarEnLocalStorage: PropTypes.func,
};

export default FormularioTurno;
