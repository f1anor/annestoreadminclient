import React from "react";
import AddFormConatiner from "./AddForm/AddFormConatiner";
import css from "./AddProduct.module.css";

const AddProduct = () => {
  return (
    <div className={css.wrapper} id="scroll-wrapper">
      <AddFormConatiner />
    </div>
  );
};

// export default reduxForm({ form: "addProduct" })(AddProduct);
export default AddProduct;
