import React, { useEffect, useRef } from "react";
import css from "./DropdownInput.module.css";

const DropdownInput = ({
  onHandleChange,
  value,
  className = "",
  list = [],
  simple = false, // Простое оформление без теней и фонового цвета
  active,
}) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref || ref.current === document.activeElement || !active) return;
    ref.current.focus();
  }, [active]);

  return (
    <div
      className={[css.wrapper, simple ? css.simple : " ", className].join(" ")}
    >
      <label className={css.inner}>
        <select ref={ref} onChange={onHandleChange} value={value}>
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
