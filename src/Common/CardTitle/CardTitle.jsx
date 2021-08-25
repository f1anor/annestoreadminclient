import React from "react";
import css from "./CardTitle.module.css";

const CardTitle = ({ children, className = " " }) => {
  return <h2 className={[css.title, className].join(" ")}>{children}</h2>;
};
export default CardTitle;
