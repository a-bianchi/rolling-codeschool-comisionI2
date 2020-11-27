import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalCustom = (props) => {
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCustom;
