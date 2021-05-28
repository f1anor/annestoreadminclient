import Title from "Common/Title/Title";
import MainOrderForm from "Common/MainOrderForm/MainOrderForm";
import React from "react";
import { reduxForm } from "redux-form";
import css from "./EditOrder.module.css";

const EditOrder = ({ handleSubmit, ...props }) => {
  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.formInner}>
          <Title className={css.title}>Добавить заказ</Title>
          <MainOrderForm form="editOrder" editMode="true" {...props} />
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "editOrder",
})(EditOrder);
