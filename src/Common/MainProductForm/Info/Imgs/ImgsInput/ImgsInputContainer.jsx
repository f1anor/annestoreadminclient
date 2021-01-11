import React from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import ImgsInput from "./ImgsInput";

const ImgsInputContainer = ({ input: { value, name }, meta: { form } }) => {
  return <ImgsInput value={value} name={name} form={form} />;
};

export default connect(null, { change })(ImgsInputContainer);
