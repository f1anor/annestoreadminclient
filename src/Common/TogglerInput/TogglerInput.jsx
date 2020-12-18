import React from "react";
import css from "./TogglerInput.module.css";

const TogglerInput = ({ input, className, checked, value, disabled }) => {
  const customID = `ID${Math.random().toString().slice(-3)}`;
  return (
    <div className={[className ? className : "", css.wrapper].join(" ")}>
      <input
        {...input}
        className={css.input}
        checked={checked}
        value={value}
        type="checkbox"
        id={customID}
        disabled={!!disabled}
      />
      <label
        htmlFor={customID}
        className={[
          !!value ? css.on : css.off,
          !!disabled ? css.disabled : "",
        ].join(" ")}
      >
        <div className={css.background}>
          <div className={css.toggler}></div>
        </div>
      </label>
    </div>
  );
};

export default TogglerInput;
