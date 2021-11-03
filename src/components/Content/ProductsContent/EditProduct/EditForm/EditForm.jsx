import React from "react";
import MainProductForm from "Common/MainProductForm/MainProductForm.jsx";
import { reduxForm } from "redux-form";
import css from "./EditForm.module.css";
import Title from "Common/Title/Title";

const EditForm = ({ handleSubmit, isCatFetching, isEditing, ...props }) => {
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formInner}>
        <Title className={css.title} anim={!!isCatFetching || !!isEditing}>
          Редактировать продукт
        </Title>
        <MainProductForm form="editProduct" {...props} />;
      </div>
    </form>
  );
};

export default reduxForm({
  form: "editProduct",
  initialValues: {
    size: [],
    category: [],
    imgs: [],
    structure: [{ id: 0, name: "", value: "" }],
  },
})(EditForm);
