import React, { useEffect } from "react";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchComments } from "actions/comments-actions";
import { useQuery } from "utils/utils";
import { getCommentsDisabled } from "selectors/comments-selectors";

const CommentsContainer = ({ ...props }) => {
  const dispatch = useDispatch();

  const isDisabled = useSelector((state) => getCommentsDisabled(state));
  const { id } = useParams();
  const queryString = useQuery().toString();

  useEffect(() => {
    dispatch(fetchComments(id, queryString));
  }, [id, dispatch, queryString]);

  return <Comments id={id} isDisabled={isDisabled} {...props} />;
};

export default CommentsContainer;
