import React from "react";
import css from "./LayoutWrapper.module.css";

const LayoutWrapper = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};
export default LayoutWrapper;
