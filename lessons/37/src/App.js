import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FormularioTurno from "./components/FormularioTurno";
import CardDetalle from "./components/CardDetalle";
import { setTurno, getTurnos, eliminarTurno } from "./utils/turnos";

function App() {
  const [lista, setLista] = useState([]);

  useEffect(async () => {
    const storageLista = await getTurnos();
    if (storageLista) setLista(storageLista);
  }, []);

  return (
    <div>
      <Row>Turnos Clinica</Row>
      <Row>
        <Col>
          <FormularioTurno
            turno={{}}
            buttonName={"Agregar"}
            handlerTurno={async (values) => {
              setLista(await setTurno(values));
            }}
          />{" "}
        </Col>
      </Row>
      <Row>
        {lista.map((element, index) => {
          return (
            <div key={index} style={{ margin: "15px" }}>
              <CardDetalle
                indice={index}
                turno={element}
                funcionEliminar={async () =>
                  setLista(await eliminarTurno(element.id))
                }
                funcionActualizar={() => console.log("Olis")}
              />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
