import React from "react";
import { connect } from "react-redux";
import AnswerForm from "./AnswerForm";
import { setAns, addAns } from "actions/comments-actions";
import { useParams } from "react-router-dom";
import { useQuery } from "utils/utils";

const AnswerFormContainer = ({ setAns, addAns, commentId }) => {
  const { id } = useParams();
  const queryString = useQuery().toString();
  const handleClearAns = () => {
    setAns("");
  };

  const handleAddAns = (values) => {
    addAns(commentId, values, id, queryString);
  };

  return <AnswerForm handleClearAns={handleClearAns} onSubmit={handleAddAns} />;
};

export default connect(null, { setAns, addAns })(AnswerFormContainer);
