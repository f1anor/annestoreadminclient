import React from "react";
import { connect } from "react-redux";
import { regNewAdmin } from "../../../actions/auth-actions";
import RegisterForm from "./RegisterForm";

const RegisterFormContainer = ({ regNewAdmin, ...props }) => {
  const handleSubmit = (values) => {
    regNewAdmin(values);
  };
  return <RegisterForm onSubmit={handleSubmit} {...props} />;
};

export default connect(null, { regNewAdmin })(RegisterFormContainer);
