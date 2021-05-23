import React from "react";
import css from "./DropdownMenuButton.module.css";

const DropdownMenuButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={[css.button, className].join(" ")}>
      {children}
    </button>
  );
};
export default DropdownMenuButton;
