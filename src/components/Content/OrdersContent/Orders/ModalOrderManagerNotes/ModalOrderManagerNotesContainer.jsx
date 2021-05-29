import {
  fetchOrderNotes,
  setModalOrderManagerNotes,
} from "actions/orders-actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getModalOrderManagerNotes,
  getNoteIsAdding,
  getOrderNotes,
} from "selectors/orders-selectors";
import ModalOrderManagerNotes from "./ModalOrderManagerNotes";

const ModalOrderManagerNotesContainer = () => {
  const [position, setPosition] = useState(1);

  const data = useSelector((state) => getModalOrderManagerNotes(state));
  const notes = useSelector((state) => getOrderNotes(state)) || [];

  const noteIsAdding = useSelector((state) => getNoteIsAdding(state));

  const total = notes.length;

  useEffect(() => {
    if (!!data) dispatch(fetchOrderNotes(data, position));
  }, [data, position]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalOrderManagerNotes(null));
  };

  return (
    <>
      {!!data && (
        <ModalOrderManagerNotes
          handleClose={handleClose}
          position={position}
          setPosition={setPosition}
          notes={notes}
          noteIsAdding={noteIsAdding}
          total={total}
          data={data}
        />
      )}
    </>
  );
};
export default ModalOrderManagerNotesContainer;
