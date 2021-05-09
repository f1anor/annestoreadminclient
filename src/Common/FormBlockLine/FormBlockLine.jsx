import React from "react";
import css from "./FormBlockLine.module.css";

const FormBlockLine = ({ children, double, ...props }) => {
  return (
    <div className={[css.wrapper, double ? css.double : ""].join(" ")}>
      {children}
    </div>
  );
};
export default FormBlockLine;
