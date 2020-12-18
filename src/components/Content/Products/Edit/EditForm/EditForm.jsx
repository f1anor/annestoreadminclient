import React from "react";
import { reduxForm } from "redux-form";
import MainProductForm from "../../../../../Common/MainProductForm/MainProductForm";

const EditForm = ({ handleSubmit, catForForm, preloadImage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <MainProductForm catForForm={catForForm} preloadImage={preloadImage} />
    </form>
  );
};

export default reduxForm({ form: "editProduct" })(EditForm);
