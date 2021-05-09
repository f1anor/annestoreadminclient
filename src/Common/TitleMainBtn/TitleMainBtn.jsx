import React from "react";
import css from "./TitleMainBtn.module.css";

const TitleMainBtn = ({ children, ...props }) => {
  return (
    <button className={css.btn} {...props}>
      {children}
    </button>
  );
};

export default TitleMainBtn;
