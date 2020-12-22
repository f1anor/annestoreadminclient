import React from "react";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.left}>Anna</span>
      <span className={css.right}>Admin</span>
    </div>
  );
};

export default Logo;
