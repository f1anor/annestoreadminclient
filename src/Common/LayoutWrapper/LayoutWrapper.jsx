import React from "react";
import css from "./LayoutWrapper.module.css";

const LayoutWrapper = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.inner}>{children}</div>
    </div>
  );
};
export default LayoutWrapper;
