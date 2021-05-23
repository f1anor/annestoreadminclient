import React from "react";
import css from "./LayoutToolsLine.module.css";

const LayoutToolsLine = ({ children, ...props }) => {
  return <div className={css.wrapper}>{children}</div>;
};
export default LayoutToolsLine;
