import React from "react";
import css from "./Parameters.module.css";
import { Link } from "react-router-dom";
import CategoriesContainer from "./Categories/CategoriesContainer";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import SearchContainer from "../../../../../Common/Search/SearchContainer";

const Parametrs = ({ isProdDisabled, selected, handleMoveToArchive }) => {
  return (
    <div className={css.wrapper}>
      <CategoriesContainer isProdDisabled={isProdDisabled} />
      <div className="d-flex">
        {selected.length > 0 && !isProdDisabled && (
          <button className={css.remove} onClick={handleMoveToArchive}>
            <TrashIcon className="mr-1" />В Архив
          </button>
        )}

        <SearchContainer placeholder="Поиск по продуктам..." />
        <Link to="/addproduct">
          <button className={css.add}>Новый</button>
        </Link>
      </div>
    </div>
  );
};
export default Parametrs;
