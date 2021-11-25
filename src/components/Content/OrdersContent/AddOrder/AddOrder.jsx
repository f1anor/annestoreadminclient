import React from "react";
import { reduxForm } from "redux-form";
import css from "./AddOrder.module.css";
import Title from "Common/Title/Title";
import MainOrderForm from "Common/MainOrderForm/MainOrderForm";
import LayoutWrapper from "Common/LayoutWrapper/LayoutWrapper";

const AddOrder = ({ handleSubmit, ...props }) => {
  return (
    <LayoutWrapper>
      <form onSubmit={handleSubmit} className={css.form}>
        <Title className={css.title}>Добавить заказ</Title>
        <MainOrderForm form="addOrder" editMode="true" {...props} />
      </form>
    </LayoutWrapper>
  );
};

export default reduxForm({
  form: "addOrder",
  initialValues: {
    delivery: "1",
    customPrice: true,
  },
})(AddOrder);
