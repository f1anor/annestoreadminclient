import React from "react";
import css from "./FormBlockLabel.module.css";

const FormBlockLabel = ({ children, check, ...props }) => {
  return (
    <label className={[css.label, check ? css.check : " "].join(" ")}>
      {children}
    </label>
  );
};
export default FormBlockLabel;
