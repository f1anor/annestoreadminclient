import {
  addManagerNote,
  fetchOrderNotes,
  setModalOrderManagerNotes,
} from "actions/orders-actions";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getModalOrderManagerNotes,
  getOrderNotes,
} from "selectors/orders-selectors";
import { useQuery } from "utils/utils";
import ModalOrderManagerNotes from "./ModalOrderManagerNotes";

const ModalOrderManagerNotesContainer = () => {
  const notesContainer = useRef();

  const [position, setPosition] = useState(1);

const { type } = useParams();
  const query = useQuery().toString();

  const data = useSelector((state) => getModalOrderManagerNotes(state));
  const notes = useSelector((state) => getOrderNotes(state)) || [];

	const noteIsAdding = useSelector((state) => )

  // Прокручиваем div с заметками до самого низа
  useEffect(() => {
    if (!notesContainer.current) return;
    notesContainer.current.scrollTop = notesContainer.current.scrollHeight;
  }, [notes]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!!data) dispatch(fetchOrderNotes(data));
  }, [data]);

  const handleClose = () => {
    dispatch(setModalOrderManagerNotes(null));
  };

  const handleSubmit = (values) => {
    dispatch(addManagerNote(data, values, type, query));
  };

  return (
    <>
      {!!data && (
        <ModalOrderManagerNotes
          handleClose={handleClose}
          position={position}
          setPosition={setPosition}
          notes={notes}
          handleSubmit={handleSubmit}
          ref={notesContainer}
        />
      )}
    </>
  );
};
export default ModalOrderManagerNotesContainer;
