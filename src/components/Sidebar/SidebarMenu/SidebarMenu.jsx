import React from "react";
import { NavLink } from "react-router-dom";
import css from "./SidebarMenu.module.css";
import { ReactComponent as DashboardIcon } from "../../../assets/svg/house-fill.svg";
import { ReactComponent as OrdersIcon } from "../../../assets/svg/clipboard.svg";
import { ReactComponent as ProductsIcon } from "../../../assets/svg/cart-fill.svg";
import { ReactComponent as CatIcon } from "../../../assets/svg/card-list.svg";
import { ReactComponent as UsersIcon } from "../../../assets/svg/people-fill.svg";

const SidebarMenu = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.menu}>
        <li>
          <NavLink
            to="/dashboard/?page=1"
            activeClassName={css.active}
            className={css.menuItem}
          >
            <DashboardIcon className={css.icon} />
            Дашборд
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            activeClassName={css.active}
            className={css.menuItem}
          >
            <OrdersIcon className={css.icon} />
            Заказы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            activeClassName={css.active}
            className={css.menuItem}
            isActive={(match, location) => {
              if (
                location.pathname === "/products/all" ||
                location.pathname === "/products/archive" ||
                location.pathname === "/addproduct"
              )
                return true;
              else return false;
            }}
          >
            <ProductsIcon className={css.icon} />
            Продукты
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/addproduct"
            activeClassName={css.active}
            className={[css.menuItem, css.secondary].join(" ")}
          >
            <span>Новый</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/categories"
            activeClassName={css.active}
            className={css.menuItem}
          >
            <CatIcon className={css.icon} />
            Категории
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            activeClassName={css.active}
            className={css.menuItem}
          >
            <UsersIcon className={css.icon} />
            Пользователи
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
