import React from "react";
import { change } from "redux-form";
import { connect } from "react-redux";
import FormEditor from "./FormEditior";

const FormEditorContainer = ({
  input: { value, onFocus, onBlur },
  meta: { form, error, touched },
  change,
}) => {
  const isError = touched && error;

  const onHandleChange = (e, editor) => {
    change(form, "content", { ...value, data: editor.getData() });
  };
  return (
    <FormEditor
      error={error}
      isError={isError}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      onHandleChange={onHandleChange}
    />
  );
};

export default connect(null, { change })(FormEditorContainer);
