import React from "react";
import NoteContainer from "./Note/NoteContainer";

const PrintNotes = ({ notes, form }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteContainer note={note} notes={notes} form={form} key={note.date} />
      ))}
    </div>
  );
};

export default PrintNotes;
