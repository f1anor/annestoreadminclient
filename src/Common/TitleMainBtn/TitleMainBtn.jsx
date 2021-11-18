import React from "react";
import css from "./TitleMainBtn.module.css";

const TitleMainBtn = ({ children, className, secondary, icon, ...props }) => {
  return (
    <button
      className={[css.button, className, secondary ? css.secondary : " "].join(
        " "
      )}
      {...props}
    >
      {!!icon && icon}
      {children}
    </button>
  );
};

export default TitleMainBtn;
