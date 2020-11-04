import React from "react";
import { Card, Button } from "react-bootstrap";
import AddNoteModal from "./AddNoteModal/AddNoteModal";
import PrintNotes from "./PrintNotes/PrintNotes";

const ManagerNotes = ({
  addModalShow,
  handleAddNote,
  setAddModalShow,
  notes,
  form,
}) => {
  return (
    <>
      <Card className="mt-4">
        <Card.Header
          as="h5"
          className="d-flex justify-content-between align-items-center"
        >
          Комментарии менеджера{" "}
          <Button
            variant="outline-primary"
            onClick={() => setAddModalShow(true)}
          >
            Добавить
          </Button>
        </Card.Header>
        <Card.Body>
          {notes.length > 0 && <PrintNotes notes={notes} form={form} />}
        </Card.Body>
      </Card>
      <AddNoteModal
        show={!!addModalShow}
        handler={handleAddNote}
        onHide={() => setAddModalShow(null)}
      />
    </>
  );
};

export default ManagerNotes;
