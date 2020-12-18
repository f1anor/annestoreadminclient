import React from "react";
import css from "./Search.module.css";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";

const Search = ({ value, changeValue, handleSetSearch, handleSubmit }) => {
  return (
    <div>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <button className={css.btn} onClick={handleSetSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
