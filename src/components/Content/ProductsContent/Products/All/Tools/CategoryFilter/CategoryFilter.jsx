import React from "react";
import css from "./CategoryFilter.module.css";
import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import { ReactComponent as CatIcon } from "assets/svg/card-list.svg";
import { Link } from "react-router-dom";

const CategoryFilter = ({ all, current, disabled = false, urls = [] }) => {
  return (
    <DropdownMenuContainer
      disabled={disabled}
      className={css.menu}
      button={
        <div className={css.btn}>
          <CatIcon />
          Категория: <span>{current}</span>
        </div>
      }
    >
      <ul>
        <li className={css.all}>
          <Link to={all}>Все</Link>
        </li>
        {urls.map((item) => (
          <li key={item.url}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </DropdownMenuContainer>
  );
};
export default CategoryFilter;
