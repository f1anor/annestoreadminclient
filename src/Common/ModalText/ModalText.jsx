import React from "react";
import css from "./ModalText.module.css";

const ModalText = ({ children, className = "" }) => {
  return <p className={[css.text, className].join(" ")}>{children}</p>;
};

export default ModalText;
