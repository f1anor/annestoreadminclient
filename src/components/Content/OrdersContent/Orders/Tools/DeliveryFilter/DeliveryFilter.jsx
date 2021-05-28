import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import React from "react";
import css from "./DeliveryFilter.module.css";
import { ReactComponent as DeliveryIcon } from "assets/svg/truck.svg";
import { Link } from "react-router-dom";

const DeliveryFilter = ({ current, all, urls = [], disabled }) => {
  return (
    <DropdownMenuContainer
      disabled={disabled}
      className={css.menu}
      button={
        <div className={css.btn}>
          <DeliveryIcon />
          Доставка: <span>{current}</span>
        </div>
      }
    >
      <ul className={css.menuElement}>
        <li>
          <Link to={all}>Все</Link>
        </li>
        {urls.map((item) => (
          <li key={item.value}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </DropdownMenuContainer>
  );
};
export default DeliveryFilter;
