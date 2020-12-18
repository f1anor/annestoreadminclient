import React from "react";
import css from "./Checkbox.module.css";

const CheckboxInput = ({ input, value, className }) => {
  const customID = `ID${Math.random().toString().slice(-3)}`;
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        {...input}
        value={value}
        className={css.input}
        id={customID}
      />
      <label className={css.label} htmlFor={customID} />
    </div>
  );
};

export default CheckboxInput;
