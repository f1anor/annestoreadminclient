import SearchContainer from "Common/Search/SearchContainer";
import React from "react";
import css from "./TotalCounter.module.css";

const TotalCounter = ({ totalCount, ...props }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <h4>Всего записей</h4>
        <div className={css.counter}>{totalCount || 0}</div>
      </div>

      <SearchContainer placeholder="Поиск..." />
    </div>
  );
};
export default TotalCounter;
