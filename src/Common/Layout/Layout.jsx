import React from "react";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.inner}>{children}</div>
    </div>
  );
};

export default Layout;
