import React from "react";
import { connect } from "react-redux";
import MainTable from "./MainTable";
import {
  getCommentsById,
  getTotalCount,
  getAnsId,
} from "selectors/comments-selectors";

const MainTableContainer = ({ ...props }) => {
  return <MainTable {...props} />;
};

const mapStateToProps = (state) => ({
  comments: getCommentsById(state),
  totalCount: getTotalCount(state),
  ansId: getAnsId(state),
});

export default connect(mapStateToProps, {})(MainTableContainer);
