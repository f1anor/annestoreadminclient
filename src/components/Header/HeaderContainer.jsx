import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions/auth-actions";
import Header from "./Header";

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

export default connect(null, { signOut })(HeaderContainer);
