import React from "react";
import css from "./FormBlockTitle.module.css";

const FormBlockTitle = ({ children, className = "", counter }) => {
  return (
    <div className={css.wrapper}>
      <h5 className={[css.title, className].join(" ")}>{children}</h5>
      <div className={css.counter}>{counter}</div>
    </div>
  );
};

export default FormBlockTitle;
