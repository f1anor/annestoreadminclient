import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import ManagerNotes from "./ManagerNotes";

const ManagerNotesContainer = ({
  meta: { form },
  input: { value },
  change,
}) => {
  const notes = value.notes ? value.notes : [];

  const [addModalShow, setAddModalShow] = useState("");

  const handleAddNote = (val) => {
    if (!val) return;
    change(form, "managerNotes", {
      notes: [...notes, { date: Date.now(), note: val }],
    });
  };

  return (
    <ManagerNotes
      handleAddNote={handleAddNote}
      addModalShow={addModalShow}
      setAddModalShow={setAddModalShow}
      notes={notes}
      form={form}
    />
  );
};

export default connect(null, { change })(ManagerNotesContainer);
