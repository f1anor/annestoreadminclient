import React from "react";
import { useSelector } from "react-redux";
import { formValueSelector } from "redux-form";
import List from "./List";

const ListContainer = ({ form, value, ...props }) => {
  let sum = 0;
  if (value.length > 0) {
    const prices = value.map((item) => {
      return item.price * item.amount;
    });
    sum = prices.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }

  return <List value={value} sum={sum} form={form} {...props} />;
};
export default ListContainer;
