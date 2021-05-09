import React from "react";
import ListItem from "./ListItem";
import { getAnsId } from "selectors/comments-selectors";
import { connect } from "react-redux";

const ListItemContainer = ({ ...props }) => {
  return <ListItem {...props} />;
};

const mapStateToProps = (state) => ({
  ansId: getAnsId(state),
});

export default connect(mapStateToProps, null)(ListItemContainer);
