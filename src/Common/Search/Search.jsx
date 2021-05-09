import React from "react";
import css from "./Search.module.css";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";

const Search = ({
  value,
  changeValue,
  handleSetSearch,
  handleSubmit,
  placeholder = "Поиск",
  className = "",
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
      />
    </div>
  );
};

export default Search;
