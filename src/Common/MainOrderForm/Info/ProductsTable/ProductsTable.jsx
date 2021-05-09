import FormBlock from "Common/FormBlock/FormBlock";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import OpenAnim from "Common/OpenAnim/OpenAnim";
import React from "react";
import css from "./ProductsTable.module.css";
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
