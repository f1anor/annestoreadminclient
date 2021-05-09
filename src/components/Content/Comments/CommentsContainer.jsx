import React, { useEffect } from "react";
import Comments from "./Comments";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchComments } from "actions/comments-actions";
import { useQuery } from "utils/utils";
import { getCommentsDisabled } from "selectors/comments-selectors";

const CommentsContainer = ({ fetchComments, ...props }) => {
  const { id } = useParams();
  const queryString = useQuery().toString();
  useEffect(() => {
    fetchComments(id, queryString);
  }, [id, fetchComments, queryString]);
  return <Comments id={id} {...props} />;
};

const mapStateToProps = (state) => ({
  isDisabled: getCommentsDisabled(state),
});

export default connect(mapStateToProps, { fetchComments })(CommentsContainer);
