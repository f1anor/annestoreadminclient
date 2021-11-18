import React from "react";
import css from "./FormBlock.module.css";

const FormBlock = ({ children, className = "", ...props }) => {
  return (
    <div className={[css.wrapper, className].join(" ")} {...props}>
      {children}
    </div>
  );
};

export default FormBlock;
