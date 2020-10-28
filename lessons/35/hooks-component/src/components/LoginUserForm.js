import React from "react";
import { useFormik } from "formik";
import setUsersInLocalStorage from "../utils/user";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Este campo es requerido!!";
  } else if (values.username.length < 4) {
    errors.username = "Debe ingresar mas de 4 caracteres!!";
  }

  if (!values.password) {
    errors.password = "El password es requerido!!!";
  }

  if (!values.email) {
    errors.email = "El email es requerido!!";
  }

  return errors;
};

const LoginUserForm = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setUsersInLocalStorage(values);
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label> Username</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      <label> Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <label> Email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default LoginUserForm;
