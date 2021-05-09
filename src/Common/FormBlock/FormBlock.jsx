import React from "react";
import css from "./FormBlock.module.css";

const FormBlock = ({ children, style, className = "" }) => {
  return (
    <div className={[css.wrapper, className].join(" ")} style={style}>
      {children}
    </div>
  );
};

export default FormBlock;
