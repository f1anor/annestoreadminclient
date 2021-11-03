import React, { useEffect } from "react";
import ProductTableInput from "./ProductTableInput";

import {
  addCustomProductsToOrder,
  setModalAddProduct,
} from "actions/orders-actions.js";
import { useDispatch } from "react-redux";

const ProductTableInputContainer = ({
  input: { value },
  meta: { form, error, touched },
  ...props
}) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setModalAddProduct({ form, value }));
  };

  useEffect(() => {
    if (form === "addOrder") {
      dispatch(addCustomProductsToOrder(form, value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductTableInput
      handleOpenModal={handleOpenModal}
      value={value}
      form={form}
      error={error}
      touched={touched}
      {...props}
    />
  );
};

export default ProductTableInputContainer;
