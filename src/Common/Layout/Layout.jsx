import React from "react";
import css from "./Layout.module.css";

const Layout = ({ className = "", children }) => {
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <div className={css.inner}>{children}</div>
    </div>
  );
};

export default Layout;
