import React from "react";
import css from "./DropdownInput.module.css";

const DropdownInput = ({
  onHandleChange,
  value,
  className = "",
  list = [],
}) => {
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <label className={css.inner}>
        <select onChange={onHandleChange} value={value}>
          {list.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DropdownInput;
