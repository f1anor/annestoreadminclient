import React from "react";
import { useState } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";

const AddNoteModal = ({ handler, ...props }) => {
  const [value, changeValue] = useState("");
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h5>Добавить заметку</h5>
      </Modal.Header>

      <Modal.Body>
        <FormControl
          as="textarea"
          value={value}
          onChange={(e) => changeValue(e.target.value)}
          placeholder="Текст заметки"
          style={{ resize: "none", height: "300px" }}
        />
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              handler(value);
              changeValue("");
              props.onHide();
            }}
          >
            Подтвердить
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default AddNoteModal;
