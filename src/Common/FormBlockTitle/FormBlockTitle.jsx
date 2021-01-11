import React from "react";
import css from "./FormBlockTitle.module.css";

const FormBlockTitle = ({ children, className = "" }) => {
  return <h5 className={[css.title, className].join(" ")}>{children}</h5>;
};

export default FormBlockTitle;
