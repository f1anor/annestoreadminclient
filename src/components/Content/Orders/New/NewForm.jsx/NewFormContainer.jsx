import React from "react";
import NewForm from "./NewForm";
import { addOrder } from "actions/orders-actions.js";
import { connect } from "react-redux";

const NewFormContainer = ({ addOrder }) => {
  const handleAddOrder = (values) => {
    addOrder(values);
  };

  return <NewForm onSubmit={handleAddOrder} />;
};

export default connect(null, { addOrder })(NewFormContainer);
