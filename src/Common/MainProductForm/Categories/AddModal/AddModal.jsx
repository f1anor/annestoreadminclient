import React, { useState } from "react";
import {
  Modal,
  Button,
  FormControl,
  Col,
  Form,
  Alert,
  Spinner,
} from "react-bootstrap";

import css from "./AddModal.module.css";

const AddModal = ({
  handler,
  title = "",
  inProgress,
  message,
  placeholder = "",
  ...props
}) => {
  const [art, changeValue] = useState("");

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h5>
          {title}{" "}
          {!!inProgress && (
            <Spinner
              animation="grow"
              size="sm"
              variant="primary"
              className={css.spinner}
            />
          )}
        </h5>
      </Modal.Header>

      <Modal.Body className="">
        {message && <Alert variant="danger">{message}</Alert>}
        <Form.Row>
          <Col>
            <FormControl
              value={art}
              onChange={(e) => changeValue(e.target.value)}
              placeholder={placeholder}
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
