import React from "react";
import { useDispatch } from "react-redux";
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

const ToolsContainer = ({ id, haveAns, ...props }) => {
  const dispatch = useDispatch();
  const query = useQuery().toString();
  const productId = useParams().id;

  const handleApply = () => {
    dispatch(applyComment(id, productId, query));
  };

  const handleRemove = () => {
    dispatch(removeComment(id, productId, query));
  };

  const handleSetAns = () => {
    dispatch(setAns(id));
  };

  const handleSetEditAns = () => {
    dispatch(setAns(""));
    setTimeout(() => {
      dispatch(setEditAns(id, haveAns));
    }, 1);
  };

  const handleRemoveAns = () => {
    dispatch(removeCommentAns(id, productId, query));
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

export default ToolsContainer;
