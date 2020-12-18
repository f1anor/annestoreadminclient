import React from "react";
import NoteContainer from "./Note/NoteContainer";

const PrintNotes = ({ notes, form, editMode }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteContainer
          note={note}
          notes={notes}
          form={form}
          key={note.date}
          editMode={editMode}
        />
      ))}
    </div>
  );
};

export default PrintNotes;
