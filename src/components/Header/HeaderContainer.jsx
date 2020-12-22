import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions/auth-actions";
import Header from "./Header";

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  ava: state.auth.ava,
  name: state.auth.name,
});

export default connect(mapStateToProps, { signOut })(HeaderContainer);
