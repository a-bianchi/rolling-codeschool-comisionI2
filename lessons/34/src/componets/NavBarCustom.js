import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBarCustom = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWmTsgtvR6AUbs8yyP_qE6RSAs1NW1Vx40hg&usqp=CAU"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{" "}
          Mis Pelis
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className={"text-muted"} href="#home">
              Inicio
            </Nav.Link>
            <Nav.Link className={"text-muted"} href="#link">
              Contacto
            </Nav.Link>
            <Nav.Link className={"text-muted"} href="#link">
              Acerca de
            </Nav.Link>
            <Nav.Link className={"text-muted"} href="#link">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarCustom;
