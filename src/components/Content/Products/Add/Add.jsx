import React from "react";
import css from "./Add.module.css";
import AddFormContainer from "./AddForm/AddFormContainer";

const Add = () => {
  return (
    <div className={css.wrapper}>
      <AddFormContainer />
    </div>
  );
};

export default Add;
