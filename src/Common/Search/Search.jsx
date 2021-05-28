import React from "react";
import css from "./Search.module.css";

const Search = ({
  value,
  changeValue,
  handleSubmit,
  placeholder = "Поиск",
  className = "",
  disabled,
}) => {
  return (
    <div>
      <input
        type="text"
        className={[css.input, className].join(" ")}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        onKeyDown={handleSubmit}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Search;
