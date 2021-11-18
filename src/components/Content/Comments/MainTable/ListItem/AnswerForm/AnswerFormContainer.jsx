import React from "react";
import { useDispatch } from "react-redux";
import AnswerForm from "./AnswerForm";
import { setAns, addAns } from "actions/comments-actions";
import { useParams } from "react-router-dom";
import { useQuery } from "utils/utils";

const AnswerFormContainer = ({ commentId }) => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const queryString = useQuery().toString();
  const handleClearAns = () => {
    dispatch(setAns(""));
  };

  const handleAddAns = (values) => {
    dispatch(addAns(commentId, values, id, queryString));
  };

  return <AnswerForm handleClearAns={handleClearAns} onSubmit={handleAddAns} />;
};

export default AnswerFormContainer;
