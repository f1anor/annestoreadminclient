import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import React from "react";
import ProductTableInputContainer from "./ProductsTableInput/ProductTableInputContainer";
import { Field } from "redux-form";
import { productsRequired } from "utils/validators";

const ProductsTable = ({ handleSetShowAdw, showAdw, editMode, ...props }) => {
  return (
    <>
      <FormBlockTitle>Состав Заказа</FormBlockTitle>
      <Field
        name="products"
        component={ProductTableInputContainer}
        validate={[productsRequired]}
        editMode={editMode}
      />
    </>
  );
};
export default ProductsTable;
