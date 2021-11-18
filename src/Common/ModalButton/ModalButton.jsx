import InputAnimProvider from "Common/InputAnimProvider/InputAnimProvider";
import React from "react";
import css from "./ModalButton.module.css";

const ModalButton = ({ anim, children, className, secondary, ...props }) => {
  return (
    <button
      className={[css.button, className, secondary ? css.secondary : " "].join(
        " "
      )}
      {...props}
    >
      <InputAnimProvider anim={anim}>{children}</InputAnimProvider>
    </button>
  );
};
export default ModalButton;
