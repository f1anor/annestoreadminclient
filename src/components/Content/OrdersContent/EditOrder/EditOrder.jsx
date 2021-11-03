import Title from "Common/Title/Title";
import MainOrderForm from "Common/MainOrderForm/MainOrderForm";
import React from "react";
import { reduxForm } from "redux-form";
import css from "./EditOrder.module.css";
import LayoutWrapperScroll from "Common/LayoutWrapperScroll/LayoutWrapperScroll";

const EditOrder = ({ handleSubmit, ...props }) => {
  return (
    <LayoutWrapperScroll>
      <form onSubmit={handleSubmit} className={css.form}>
        <Title className={css.title}>Добавить заказ</Title>
        <MainOrderForm form="editOrder" editMode="true" {...props} />
      </form>
    </LayoutWrapperScroll>
  );
};

export default reduxForm({
  form: "editOrder",
})(EditOrder);
