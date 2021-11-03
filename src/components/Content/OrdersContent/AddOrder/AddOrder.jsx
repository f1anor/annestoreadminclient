import React from "react";
import { reduxForm } from "redux-form";
import css from "./AddOrder.module.css";
import Title from "Common/Title/Title";
import MainOrderForm from "Common/MainOrderForm/MainOrderForm";
import LayoutWrapperScroll from "Common/LayoutWrapperScroll/LayoutWrapperScroll";

const AddOrder = ({ handleSubmit, ...props }) => {
  return (
    <LayoutWrapperScroll>
      <form onSubmit={handleSubmit} className={css.form}>
        <Title className={css.title}>Добавить заказ</Title>
        <MainOrderForm form="addOrder" editMode="true" {...props} />
      </form>
    </LayoutWrapperScroll>
  );
};

export default reduxForm({
  form: "addOrder",
  initialValues: {
    delivery: "1",
    customPrice: true,
  },
})(AddOrder);
