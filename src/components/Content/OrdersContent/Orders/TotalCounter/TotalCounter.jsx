import SearchContainer from "Common/Search/SearchContainer";
import React from "react";
import css from "./TotalCounter.module.css";

const TotalCounter = ({ totalCount, disabled }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h4>Всего записей</h4>
        <div className={css.counter}>{totalCount || 0}</div>
      </div>

      <SearchContainer placeholder="Поиск..." disabled={disabled} />
    </div>
  );
};
export default TotalCounter;
