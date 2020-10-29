import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, "Debe contener mas de cuatro caracateres!!!")
    .max(10, "No puede contener mas de 10 caracateres!!!")
    .required("El nombre de usuario es requerido!!!"),
  password: Yup.string().required("El password es requerido!!"),
  email: Yup.string()
    .email("Debe ser un email valido!!")
    .required("El email es requerido!!"),
});

const LoginUserForm = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
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
