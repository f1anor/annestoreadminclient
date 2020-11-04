import React from "react";

import { Modal, Button } from "react-bootstrap";

const WarningModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Предупреждение
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        Вы действительно хотите {props.content ? props.content : ""}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Закрыть</Button>
        <Button
          variant="warning"
          onClick={() => {
            props.handler();
            props.onHide();
          }}
        >
          Подтвердить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WarningModal;
