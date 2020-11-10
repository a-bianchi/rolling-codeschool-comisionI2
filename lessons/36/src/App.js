import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FormularioTurno from "./components/FormularioTurno";
import CardDetalle from "./components/CardDetalle";
import ComponenteHijos from "./components/ComponenteHijos";
import {
  setTurnoInLocalStorage,
  getTurnosInLocalStorage,
  eliminarTurnosInLocalStorage,
} from "./utils/turnos";

function App() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const storageLista = getTurnosInLocalStorage();
    if (storageLista) setLista(storageLista);
  }, []);

  return (
    <div>
      <Row>Turnos Clinica</Row>
      <Row>
        <Col>
          <FormularioTurno
            buttonName={"Agregar"}
            guardarEnLocalStorage={(values) => {
              setLista(setTurnoInLocalStorage(values));
            }}
          />{" "}
        </Col>
      </Row>
      <Row>
        <ComponenteHijos>{"Soy un boton"}</ComponenteHijos>
      </Row>
      <Row>
        {lista.map((element, index) => {
          return (
            <div key={index} style={{ margin: "15px" }}>
              <CardDetalle
                indice={index}
                turno={element}
                funcionEliminar={() =>
                  setLista(eliminarTurnosInLocalStorage(element.id))
                }
              />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
