import React from "react";
import css from "./Amount.module.css";

const Amount = ({ value, inc, dec, ...props }) => {
  return (
    <div className={css.wrapper}>
      <button type="button" className={css.btn} onClick={dec}>
        -
      </button>
      <span>{value}</span>
      <button type="button" className={css.btn} onClick={inc}>
        +
      </button>
    </div>
  );
};
export default Amount;
