import { removeNoteFromOrder } from "actions/orders-actions";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "utils/utils";
import List from "./List";

const ListContainer = ({ data, notesType, notes }) => {
  const notesContainer = useRef();
  const dispatch = useDispatch();
  const { type } = useParams();
  const query = useQuery().toString();

  const handleScrollToBottom = () => {
    notesContainer.current.scrollTop = notesContainer.current.scrollHeight;
  };

  // Прокручиваем div с заметками до самого низа
  useEffect(() => {
    handleScrollToBottom();
  }, [notes]);

  const handleRemove = (time) => {
    dispatch(removeNoteFromOrder(data, time, type, query));
  };

  return (
    <List
      handleRemove={handleRemove}
      ref={notesContainer}
      notes={notes}
      notesType={notesType}
    />
  );
};
export default ListContainer;
