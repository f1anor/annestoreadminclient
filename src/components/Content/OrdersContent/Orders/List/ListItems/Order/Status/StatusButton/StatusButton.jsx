import React from "react";
import css from "./StatusButton.module.css";

const StatusButton = ({ children, value }) => {
  return <div className={[css.button, css[value]].join(" ")}>{children}</div>;
};
export default StatusButton;
