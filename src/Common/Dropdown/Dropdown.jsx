import React from "react";
import css from "./Dropdown.module.css";

const Dropdown = ({ onChange, value, className = "", list = [] }) => {
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <label className={css.inner}>
        <select onChange={onChange} value={value}>
          {list.map(
            (item) =>
              item !== null && (
                <option key={item.value} value={item.value}>
                  {item.title}
                </option>
              )
          )}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
