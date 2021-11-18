import React from "react";
import css from "./FormBlockLabel.module.css";

const FormBlockLabel = ({ children, check, className = "", ...props }) => {
  return (
    <label
      className={[css.label, check ? css.check : " ", className].join(" ")}
    >
      {children}
    </label>
  );
};
export default FormBlockLabel;
