import React from "react";
import { reduxForm } from "redux-form";
import MainProductForm from "Common/MainProductForm/MainProductForm";
import css from "./AddForm.module.css";
import Title from "Common/Title/Title";

const AddForm = ({ handleSubmit, ...props }) => {
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formInner}>
        <Title className={css.title}>Добавить продукт</Title>
        <MainProductForm form="addProduct" {...props} />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addProduct",
  initialValues: {
    size: [],
    category: [],
    imgs: [],
    structure: [{ id: 0, name: "", value: "" }],
  },
})(AddForm);
