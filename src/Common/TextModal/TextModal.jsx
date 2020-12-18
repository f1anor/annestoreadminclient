import React from "react";

import { Modal, Button } from "react-bootstrap";

const TextModal = ({ content, ...props }) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" />
      </Modal.Header> */}
      <Modal.Body className="pl-3">{content ? content : ""}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TextModal;
