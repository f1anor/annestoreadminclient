import React from "react";
import css from "./FormBlockLine.module.css";

const FormBlockLine = ({ children, double, className = " " }) => {
  return (
    <div
      className={[css.wrapper, double ? css.double : "", className].join(" ")}
    >
      {children}
    </div>
  );
};
export default FormBlockLine;
