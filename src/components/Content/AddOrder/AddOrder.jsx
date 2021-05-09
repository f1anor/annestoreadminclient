import React from "react";

import AddFormContainer from "./AddForm/AddFormContainer";
import css from "./AddOrder.module.css";
import ModalAddNoteContainer from "./ModalAddNote/ModalAddNoteContainer";
import ModalAddProductContainer from "./ModalAddProduct/ModalAddProductContainer";

const AddOrder = ({ ...props }) => {
  return (
    <div className={css.wrapper} id="scroll-wrapper">
      <AddFormContainer />
      <ModalAddProductContainer />
      <ModalAddNoteContainer />
    </div>
  );
};
export default AddOrder;
