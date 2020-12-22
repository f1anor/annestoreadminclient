import React from "react";

import { Modal, Button } from "react-bootstrap";

const WarningModal = ({ onHide, content, handler, show }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
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
        Вы действительно хотите {content ? content : ""}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button
          onClick={() => {
            handler();
            onHide();
          }}
        >
          Подтвердить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WarningModal;
