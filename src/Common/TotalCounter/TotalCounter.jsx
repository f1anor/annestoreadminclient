import SearchContainer from "Common/Search/SearchContainer";
import React from "react";
import css from "./TotalCounter.module.css";

const TotalCounter = ({
  children,
  totalCount = 0,
  disabled,
  selected = [],
  className = "",
}) => {
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <div className={css.title}>
        <h4>{selected.length > 0 ? "Выбрано" : "Всего записей"}</h4>
        <div className={css.counter}>
          {selected.length > 0
            ? `${selected.length}/${totalCount}`
            : totalCount}
        </div>
      </div>
      <div className={css.leftSide}>
        <div className={css.children}>{children}</div>
        <SearchContainer placeholder="Поиск..." disabled={disabled} />
      </div>
    </div>
  );
};
export default TotalCounter;
