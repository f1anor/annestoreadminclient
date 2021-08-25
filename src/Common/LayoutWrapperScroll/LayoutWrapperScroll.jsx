import React from "react";
import css from "./LayoutWrapperScroll.module.css";

const LayoutWrapperScroll = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>{children}</div>
    </div>
  );
};
export default LayoutWrapperScroll;
