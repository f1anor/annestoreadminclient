import React, { useState } from "react";
import { Modal, Button, FormControl, Col, Form, Alert } from "react-bootstrap";

import Title from "Common/Title/Title";

const AddModal = ({ handler, inProgress, message, ...props }) => {
  const [art, changeValue] = useState("");

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Title anim={inProgress}>Добавить продукт</Title>
      </Modal.Header>

      <Modal.Body className="">
        {message && <Alert variant="danger">{message}</Alert>}
        <Form.Row>
          <Col>
            <FormControl
              value={art}
              onChange={(e) => changeValue(e.target.value)}
              placeholder="Артикул"
            />
          </Col>
          <Col md="auto">
            <Button
              variant="warning"
              type="button"
              onClick={() => {
                handler(art);
                changeValue("");
              }}
              disabled={!!inProgress}
            >
              Подтвердить
            </Button>
          </Col>
        </Form.Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
