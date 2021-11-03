import React from "react";
import css from "./LayoutWrapperScroll.module.css";

const LayoutWrapperScroll = ({ children }) => {
  return (
    <div className={css.wrapper} data-scroll="true">
      <div className={css.content}>{children}</div>
    </div>
  );
};
export default LayoutWrapperScroll;
