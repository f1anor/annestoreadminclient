import React from "react";
import { change } from "redux-form";
import { connect } from "react-redux";
import FormEditor from "./FormEditior";

const FormEditorContainer = ({
  input: { value },
  meta: { form, error, touched },
  change,
}) => {
  const onHandleChange = (e, editor) => {
    change("addProduct", "content", { ...value, data: editor.getData() });
  };

  return <FormEditor onHandleChange={onHandleChange} />;
};

export default connect(null, { change })(FormEditorContainer);
