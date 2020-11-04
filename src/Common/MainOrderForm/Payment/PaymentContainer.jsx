import React from "react";
import Payment from "./Payment";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";

let PaymentContainer = ({ productsValues, ...props }) => {
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

const selector = formValueSelector("addOrder");

const mapStateToProps = (state) => ({
  productsValues: selector(state, "products"),
});

export default connect(mapStateToProps, null)(PaymentContainer);
