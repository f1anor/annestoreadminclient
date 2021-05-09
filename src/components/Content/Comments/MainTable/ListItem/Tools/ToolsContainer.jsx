import React from "react";
import { connect } from "react-redux";
import {
  applyComment,
  removeComment,
  removeCommentAns,
  setAns,
  setEditAns,
} from "actions/comments-actions";
import Tools from "./Tools";
import { useQuery } from "utils/utils";
import { useParams } from "react-router-dom";

const ToolsContainer = ({
  id,
  applyComment,
  removeComment,
  removeCommentAns,
  setAns,
  setEditAns,
  haveAns,
  ...props
}) => {
  const query = useQuery().toString();
  const productId = useParams().id;

  const handleApply = () => {
    applyComment(id, productId, query);
  };

  const handleRemove = () => {
    removeComment(id, productId, query);
  };

  const handleSetAns = () => {
    setAns(id);
  };

  const handleSetEditAns = () => {
    setAns("");
    setTimeout(() => {
      setEditAns(id, haveAns);
    }, 1);
  };

  const handleRemoveAns = () => {
    removeCommentAns(id, productId, query);
  };

  return (
    <Tools
      id={id}
      handleApply={handleApply}
      handleRemove={handleRemove}
      handleRemoveAns={handleRemoveAns}
      handleSetAns={handleSetAns}
      handleSetEditAns={handleSetEditAns}
      haveAns={haveAns}
      {...props}
    />
  );
};

export default connect(null, {
  applyComment,
  removeComment,
  removeCommentAns,
  setAns,
  setEditAns,
})(ToolsContainer);
