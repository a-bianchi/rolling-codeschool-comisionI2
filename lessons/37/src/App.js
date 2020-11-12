import React, { useState, useEffect } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import FormularioTurno from "./components/FormularioTurno";
import CardDetalle from "./components/CardDetalle";
import {
  setTurno,
  getTurnos,
  eliminarTurno,
  validarTurnos,
} from "./utils/turnos";

function App() {
  const [lista, setLista] = useState([]);
  const [alert, setAlert] = useState(false);

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
              const turnosRepetidos = await validarTurnos(values);
              if (turnosRepetidos.length > 0) {
                setAlert(true);
              } else {
                await setTurno(values);
                setLista(await getTurnos());
              }
            }}
          />{" "}
        </Col>
      </Row>
      <Row>
        {alert ? (
          <Alert variant={"danger"}>
            {" "}
            No se puede sacar mas de un turno por persona!!
          </Alert>
        ) : null}
        {lista.length > 0 ? (
          lista.map((element, index) => {
            return (
              <div key={index} style={{ margin: "15px" }}>
                <CardDetalle
                  indice={index}
                  turno={element}
                  funcionEliminar={async () => {
                    await eliminarTurno(element.id);
                    setLista(await getTurnos());
                  }}
                />
              </div>
            );
          })
        ) : (
          <Alert variant={"info"}> No hay turnos cargados!!!</Alert>
        )}
      </Row>
    </div>
  );
}

export default App;
