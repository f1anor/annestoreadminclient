import React from "react";
import css from "./Toggler.module.css";

const Toggler = ({
  value = false,
  disabled = false,
  handler = () => {},
  className = "",
}) => {
  const customID = `ID${Math.random().toString().slice(-3)}`;
  return (
    <div className={[className, css.wrapper].join(" ")}>
      <input
        type="checkbox"
        onChange={handler}
        checked={value}
        id={customID}
        className={css.input}
        disabled={!!disabled}
      />
      <label
        htmlFor={customID}
        className={[
          css.label,
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

export default Toggler;
