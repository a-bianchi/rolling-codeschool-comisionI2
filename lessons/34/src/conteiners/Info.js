import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div>
      <Alert variant={"warning"}>Hola soy un alert</Alert>
      <Link to="/error">Va a pag de error</Link>
    </div>
  );
};

export default Info;
