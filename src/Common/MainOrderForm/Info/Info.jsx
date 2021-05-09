import React from "react";
import FormBlock from "Common/FormBlock/FormBlock";
import css from "./Info.module.css";

import AboutUserContainer from "./AboutUser/AboutUserContainer";
import DeliveryContainer from "./Delivery/DeliveryContainer";
import ProductsTable from "./ProductsTable/ProductsTable";

const Info = ({ formName, editMode }) => {
  return (
    <FormBlock className={css.wrapper}>
      <ProductsTable editMode={editMode} />
      <AboutUserContainer />
      <DeliveryContainer formName={formName} />
    </FormBlock>
  );
};

export default Info;
