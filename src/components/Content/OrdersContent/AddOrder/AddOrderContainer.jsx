import { addOrder } from "actions/orders-actions";
import React from "react";
import { useDispatch } from "react-redux";
import AddOrder from "./AddOrder";

const AddOrderContainer = ({ addProduct, fetchCategories, ...props }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(addOrder(values));
  };

  return <AddOrder onSubmit={handleSubmit} {...props} />;
};

export default AddOrderContainer;
