import Input from "Common/Input/Input";
import React from "react";
import { Field } from "redux-form";
import { isNumber, required } from "utils/validators";

const Phone = ({ editMode, checkNumber, formatPhone, ...props }) => {
  return (
    <Field
      name="phone"
      component={Input}
      validate={[required, isNumber]}
      readOnly={!editMode}
      onKeyDown={checkNumber}
      onChange={formatPhone}
    />
  );
};
export default Phone;
