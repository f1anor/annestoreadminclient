import React from "react";
import { reduxForm } from "redux-form";
import MainProductForm from "../../../../../Common/MainProductForm/MainProductForm";

const EditForm = ({ handleSubmit, catForForm }) => {
  return (
    <form onSubmit={handleSubmit}>
      <MainProductForm catForForm={catForForm} />
    </form>
  );
};

export default reduxForm({ form: "editProduct" })(EditForm);
