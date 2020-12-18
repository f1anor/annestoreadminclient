import React from "react";
import { Badge, Col, Row, Button } from "react-bootstrap";
import { ReactComponent as TrashIcon } from "assets/svg/trash2-fill.svg";

const Note = ({ handleRemove, note, editMode }) => {
  return (
    <Row className="align-items-end">
      <Col md="2">
        <Badge variant="primary" style={{ fontSize: "14px" }}>
          {new Date(note.date).toLocaleString("ru")}
        </Badge>
      </Col>
      <Col md="9">{note.note}</Col>
      <Col md="1">
        <Button
          onClick={() => handleRemove(note.date)}
          variant="none"
          disabled={!editMode}
        >
          <TrashIcon />
        </Button>
      </Col>
    </Row>
  );
};

export default Note;
