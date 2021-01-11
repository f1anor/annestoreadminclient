import React from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import DropdownInput from "./DropdownInput";

const DropdownInputContainer = ({
  change,
  input: { value, name },
  meta: { form, error, touched },
  ...props
}) => {
  const onHandleChange = (e) => {
    change(form, name, e.target.value);
  };
  return (
    <DropdownInput value={value} onHandleChange={onHandleChange} {...props} />
  );
};

export default connect(null, { change })(DropdownInputContainer);
