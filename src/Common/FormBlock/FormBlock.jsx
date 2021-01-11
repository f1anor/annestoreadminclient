import React from "react";
import css from "./FormBlock.module.css";

const FormBlock = ({ children, className = "" }) => {
  return <div className={[css.wrapper, className].join(" ")}>{children}</div>;
};

export default FormBlock;
