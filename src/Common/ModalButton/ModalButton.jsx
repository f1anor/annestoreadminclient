import React from "react";
import css from "./ModalButton.module.css";

const ModalButton = ({ children, className, secondary, ...props }) => {
  return (
    <button
      className={[css.button, className, secondary ? css.secondary : " "].join(
        " "
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default ModalButton;
