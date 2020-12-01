import React, { useState, useEffect } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import FormularioTurno from "./components/FormularioTurno";
import CardDetalle from "./components/CardDetalle";
import { setTurno, getTurnos, eliminarTurno } from "./services/turnos";
import ModalCustom from "./components/ModalCustom";

function App() {
  const [lista, setLista] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(async () => {
    try {
      const storageLista = await getTurnos();
      if (storageLista.data) setLista(storageLista.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

  return (
    <div>
      <Row>Turnos Clinica</Row>
      <Row>
        <Col xs={5}>
          <FormularioTurno
            turno={{}}
            buttonName={"Agregar"}
            handlerTurno={async (values) => {
              const turnoNuevo = await setTurno(values);
              setLista([...lista, turnoNuevo.data]);
            }}
          />{" "}
        </Col>
      </Row>
      <ModalCustom
        show={show}
        onHide={() => setShow(false)}
        title={"Informacion"}
        body={"Ya existe un turno para esa mascota!!"}
      />
      <Row>
        {lista.length > 0 ? (
          lista.map((element, index) => {
            return (
              <div key={index} style={{ margin: "15px" }}>
                <CardDetalle
                  indice={index}
                  turno={element}
                  funcionEliminar={async () => {
                    await eliminarTurno(element._id);
                    const nuevaLista = lista.filter((turno) => {
                      if (turno._id !== element._id) return turno;
                    });
                    setLista(nuevaLista);
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
