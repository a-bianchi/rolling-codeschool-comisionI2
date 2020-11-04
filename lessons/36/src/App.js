import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FormularioTurno from "./components/FormularioTurno";
import CardDetalle from "./components/CardDetalle";
import { getTurnosInLocalStorage } from "./utils/turnos";

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
          <FormularioTurno buttonName={"Agregar"} />{" "}
        </Col>
      </Row>
      <Row>
        {lista.map((element, index) => {
          return (
            <div key={index} style={{ margin: "15px" }}>
              <CardDetalle
                indice={index}
                turno={element}
                funcionEliminar={() => console.log("Olis")}
              />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
