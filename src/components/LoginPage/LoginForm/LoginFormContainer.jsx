import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../../actions/auth-actions";
import LoginForm from "./LoginForm";

const LoginFormContainer = ({ signIn }) => {
  const handleSubmit = (values) => {
    signIn(values);
  };
  return <LoginForm onSubmit={handleSubmit} />;
};

export default connect(null, { signIn })(LoginFormContainer);
