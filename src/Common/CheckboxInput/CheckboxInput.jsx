import React from "react";
import css from "./Checkbox.module.css";

const CheckboxInput = ({ input, value, className = "", ...props }) => {
  const inputValue = !!input ? input.value : undefined;
  const customID = `ID${Math.random().toString().slice(-3)}`;
  const checked = !!value || !!inputValue;
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <input
        type="checkbox"
        {...input}
        checked={checked}
        className={css.input}
        id={customID}
        {...props}
      />
      <label className={css.label} htmlFor={customID} />
    </div>
  );
};

export default CheckboxInput;
