import React from "react";
import { connect } from "react-redux";
import { preloadAvatar } from "../../actions/auth-actions";
import RegisterPage from "./RegisterPage";

const RegisterPageContainer = (props) => {
  return <RegisterPage {...props} />;
};

export default connect(null, { preloadAvatar })(RegisterPageContainer);
