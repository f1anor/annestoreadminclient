import { setModalAddManagerNote } from "actions/orders-actions";
import React from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { change } from "redux-form";
import ManagerNotes from "./ManagerNotes";

const ManagerNotesContainer = ({
  meta: { form },
  input: { value },
  editMode,
}) => {
  const dispatch = useDispatch();

  const handleSetModal = () => {
    dispatch(setModalAddManagerNote(form));
  };

  return (
    <ManagerNotes
      handleSetModal={handleSetModal}
      notes={value}
      form={form}
      editMode={editMode}
    />
  );
};

export default connect(null, { change })(ManagerNotesContainer);
