import Title from "Common/Title/Title";
import MainOrderForm from "Common/MainOrderForm/MainOrderForm";
import React from "react";
import { reduxForm } from "redux-form";
import css from "./EditOrder.module.css";
import LayoutWrapper from "Common/LayoutWrapper/LayoutWrapper";

const EditOrder = ({ handleSubmit, ...props }) => {
  return (
    <LayoutWrapper>
      <form onSubmit={handleSubmit} className={css.form}>
        <Title className={css.title}>Добавить заказ</Title>
        <MainOrderForm form="editOrder" editMode="true" {...props} />
      </form>
    </LayoutWrapper>
  );
};

export default reduxForm({
  form: "editOrder",
})(EditOrder);
