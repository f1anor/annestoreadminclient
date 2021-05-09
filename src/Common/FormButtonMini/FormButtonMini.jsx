import React from "react";
import css from "./FormButtonMini.module.css";

const FormButtonMini = ({ children, className, ...props }) => {
  return (
    <button className={[css.btn, className].join(" ")} {...props}>
      {children}
    </button>
  );
};
export default FormButtonMini;
