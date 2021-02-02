import React from "react";
import css from "./CustomCheckbox.module.css";

const CustomCheckbox = ({ value, className, content, ...props }) => {
  const customID = `ID${Math.random().toString().slice(-3)}`;
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <input
        type="checkbox"
        value={value}
        className={css.input}
        id={customID}
        {...props}
      />
      <label className={css.label} htmlFor={customID}>
        {content}
      </label>
    </div>
  );
};

export default CustomCheckbox;
