import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalAddNote from "./ModalAddNote";
import { getModalAddManagerNote } from "selectors/orders-selectors";
import { addOrderNote, setModalAddManagerNote } from "actions/orders-actions";

const ModalAddNoteContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => getModalAddManagerNote(state));

  const handleCloseModal = () => {
    dispatch(setModalAddManagerNote(null));
  };

  const handleAddNote = (values) => {
    dispatch(addOrderNote(data, values));
  };
  return (
    <>
      {!!data && (
        <ModalAddNote
          handleCloseModal={handleCloseModal}
          handleAddNote={handleAddNote}
        />
      )}
    </>
  );
};
export default ModalAddNoteContainer;
