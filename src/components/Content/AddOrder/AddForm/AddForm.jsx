import React from "react";
import { reduxForm } from "redux-form";

import css from "./AddForm.module.css";
import Title from "Common/Title/Title";
import MainOrderForm from "Common/MainOrderForm/MainOrderForm";

const AddForm = ({ handleSubmit, ...props }) => {
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formInner}>
        <Title className={css.title}>Добавить заказ</Title>
        <MainOrderForm form="addOrder" editMode="true" {...props} />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addOrder",
  initialValues: {
    delivery: "1",
    customPrice: true,
  },
})(AddForm);
