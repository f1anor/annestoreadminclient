import React from "react";
import { Button } from "react-bootstrap";
import { reduxForm } from "redux-form";
import MainOrderForm from "../../../../../Common/MainOrderForm/MainOrderForm";

const NewForm = ({ handleSubmit, products, ...props }) => {
  return (
    <form onSubmit={handleSubmit}>
      <MainOrderForm />
      <div className="mt-5 mb-5">
        <Button type="submit">Добавить</Button>
        <Button type="submit" className="ml-2" variant="outline-primary">
          Очистить
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "addOrder" })(NewForm);
