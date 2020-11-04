import React, { useEffect } from "react";
import { useState } from "react";
import ProductTableInput from "./ProductTableInput";

import { addOrderProduct } from "actions/orders-actions.js";
import { connect } from "react-redux";
import { change } from "redux-form";

const ProductTableInputContainer = ({
  change,
  addOrderProduct,
  input: { value },
  meta: { form, error, touched },
  ...props
}) => {
  const [modalAddShow, setModalAddShow] = useState(null);

  const handleAddOrderProduct = (art) => {
    addOrderProduct(art, value, form);
  };

  useEffect(() => {
    if (value.success && !value.message) {
      change(form, "products", {
        ...value,
        message: null,
        success: null,
      });
      setModalAddShow(false);
    }
  }, [value, form, change]);

  return (
    <ProductTableInput
      modalAddShow={modalAddShow}
      setModalAddShow={setModalAddShow}
      handleAddOrderProduct={handleAddOrderProduct}
      value={value}
      form={form}
      error={error}
      touched={touched}
      {...props}
    />
  );
};

export default connect(null, { addOrderProduct, change })(
  ProductTableInputContainer
);
