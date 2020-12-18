import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { getIsFetching } from "selectors/users-selectors";

const UsersContainer = (props) => {
  return <Users {...props} />;
};

const mapStateToProps = (state) => ({
  isFetching: getIsFetching(state),
});

export default connect(mapStateToProps, null)(UsersContainer);
