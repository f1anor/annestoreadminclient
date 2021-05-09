import React, { useEffect } from "react";
import Payment from "./Payment";
import { change, formValueSelector } from "redux-form";
import { useDispatch, useSelector } from "react-redux";

let PaymentContainer = ({ formName, ...props }) => {
  const dispatch = useDispatch();
  const products =
    useSelector((state) => formValueSelector(formName)(state, "products")) ||
    [];

  const customPrice = useSelector((state) =>
    formValueSelector(formName)(state, "customPrice")
  );

  const delivery =
    useSelector((state) =>
      formValueSelector(formName)(state, "deliveryPrice")
    ) || 0;

  console.log(delivery);

  let price = 0;

  if (products.length > 0) {
    const prices = products.map((item) => {
      return item.price * item.amount;
    });
    price = prices.reduce((acc, currentValue) => {
      return acc + currentValue;
    });
  }

  price += +delivery;

  useEffect(() => {
    dispatch(change(formName, "price", price));
  }, [price, dispatch, formName, customPrice]);

  return <Payment price={price} customPrice={customPrice} {...props} />;
};

export default PaymentContainer;
