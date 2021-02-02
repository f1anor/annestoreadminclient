import React from "react";
import css from "./ArrowBtn.module.css";
import { ReactComponent as ArrowIcon } from "assets/svg/arrow-down.svg";

const ArrowBtn = ({ down, className = "", ...props }) => {
  return (
    <button
      type="button"
      className={[css.openBtn, !!down ? css.open : "", className].join(" ")}
      {...props}
    >
      <ArrowIcon />
    </button>
  );
};

export default ArrowBtn;
