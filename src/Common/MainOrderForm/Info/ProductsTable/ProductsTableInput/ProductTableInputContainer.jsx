import React from "react";
import ProductTableInput from "./ProductTableInput";

import { setModalAddProduct } from "actions/orders-actions.js";
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
