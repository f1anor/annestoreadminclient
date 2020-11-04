import React from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import Note from "./Note";

const NoteContainer = ({ change, notes, form, ...props }) => {
  const handleRemove = (date) => {
    change(form, "managerNotes", {
      notes: [...notes.filter((item) => item.date !== date)],
    });
  };
  return <Note handleRemove={handleRemove} {...props} />;
};

export default connect(null, { change })(NoteContainer);
