import React from "react";
import { reduxForm } from "redux-form";

import css from "./AddOrder.module.css";
import Title from "Common/Title/Title";
import MainOrderForm from "Common/MainOrderForm/MainOrderForm";

const AddOrder = ({ handleSubmit, ...props }) => {
  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.formInner}>
          <Title className={css.title}>Добавить заказ</Title>
          <MainOrderForm form="addOrder" editMode="true" {...props} />
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "addOrder",
  initialValues: {
    delivery: "1",
    customPrice: true,
  },
})(AddOrder);
