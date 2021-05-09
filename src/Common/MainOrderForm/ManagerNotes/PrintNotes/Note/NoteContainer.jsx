import React from "react";
import { useDispatch } from "react-redux";
import { change } from "redux-form";
import Note from "./Note";

const NoteContainer = ({ notes, form, ...props }) => {
  const dispatch = useDispatch();

  const handleRemove = (date) => {
    dispatch(
      change(form, "managerNotes", [
        ...notes.filter((item) => item.date !== date),
      ])
    );
  };
  return <Note handleRemove={handleRemove} {...props} />;
};

export default NoteContainer;
