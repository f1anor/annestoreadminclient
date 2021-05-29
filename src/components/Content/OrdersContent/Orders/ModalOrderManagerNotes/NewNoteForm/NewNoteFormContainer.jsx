import { addManagerNote } from "actions/orders-actions";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "utils/utils";
import NewNoteForm from "./NewNoteForm";

const NewNoteFormContainer = ({ data, setPosition, ...props }) => {
  const dispatch = useDispatch();

  const { type } = useParams();
  const query = useQuery().toString();

  const handleSubmit = (values) => {
    dispatch(addManagerNote(data, values, type, query));
    setPosition(1);
  };
  return <NewNoteForm onSubmit={handleSubmit} {...props} />;
};
export default NewNoteFormContainer;
