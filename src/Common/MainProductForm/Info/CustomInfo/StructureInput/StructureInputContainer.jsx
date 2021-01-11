import React from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import StructureInput from "./StructurerInput";

const StructureInputContainer = ({
  input: { value, name },
  meta: { form },
  change,
  ...props
}) => {
  const handleAdd = () => {
    change(form, name, [...value, { id: Date.now(), name: "", value: "" }]);
  };

  return (
    <StructureInput
      value={value}
      form={form}
      name={name}
      handleAdd={handleAdd}
    />
  );
};

export default connect(null, { change })(StructureInputContainer);
