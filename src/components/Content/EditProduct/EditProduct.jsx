import React from "react";
import EditFormContainer from "./EditForm/EditFormContainer";
import css from "./EditProduct.module.css";

const EditProduct = ({ ...props }) => {
  return (
    <div className={css.wrapper}>
      <EditFormContainer {...props} />
    </div>
  );
};

export default EditProduct;

//id="scroll-wrapper"
