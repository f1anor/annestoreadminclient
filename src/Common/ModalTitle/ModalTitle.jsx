import React from "react";
import css from "./ModalTitle.module.css";

const ModalTitle = ({ icon, children }) => {
  return (
    <h4 className={css.title}>
      {icon}
      {children}
    </h4>
  );
};

export default ModalTitle;
