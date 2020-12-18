import React from "react";
import Payment from "./Payment";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { useEffect } from "react";

let selector;

let PaymentContainer = ({ productsValues, formName, ...props }) => {
  useEffect(() => {
    selector = formValueSelector(formName);
  }, [formName]);

  const products = !!productsValues ? productsValues.products : [];
  let price = 0;
  if (products.length > 0) {
    const prices = products.map((item) => {
      return item.price * item.amount;
    });
    price = prices.reduce((acc, currentValue) => {
      return acc + currentValue;
    });
  }

  return <Payment price={price} {...props} />;
};

const mapStateToProps = (state) => ({
  productsValues: selector && selector(state, "products"),
});

export default connect(mapStateToProps, null)(PaymentContainer);
