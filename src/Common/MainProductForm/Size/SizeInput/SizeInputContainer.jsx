import React from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import SizeInput from "./SizeInput";

const SizeInputContainer = ({
  meta: { form },
  input: { value = [], name },
  change,
  ...props
}) => {
  const handleSelect = (size) => {
    if (value.find((item) => item === size)) {
      change(
        form,
        name,
        value.filter((item) => item !== size)
      );
    } else {
      change(form, name, [...value, size]);
    }
  };

  return <SizeInput handleSelect={handleSelect} value={value} {...props} />;
};

export default connect(null, { change })(SizeInputContainer);
