import React from "react";
import { NavLink } from "react-router-dom";
import css from "./SidebarMenu.module.css";
import { ReactComponent as DashboardIcon } from "assets/svg/house-fill.svg";
import { ReactComponent as OrdersIcon } from "assets/svg/clipboard.svg";
import { ReactComponent as ProductsIcon } from "assets/svg/cart-fill.svg";
import { ReactComponent as CatIcon } from "assets/svg/card-list.svg";
import { ReactComponent as UsersIcon } from "assets/svg/people-fill.svg";
import { ReactComponent as CommentsIcon } from "assets/svg/comments.svg";

const SidebarMenu = ({ sidebarType }) => {
  return (
    <div className={[css.wrapper, sidebarType === 1 ? css.mini : ""].join(" ")}>
      <ul className={css.menu}>
        <li>
          <NavLink
            to="/dashboard?page=1"
            activeClassName={css.active}
            className={css.menuItem}
          >
            <DashboardIcon className={css.icon} />
            {+sidebarType !== 1 ? "Дашборд" : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders/all?page=1"
            activeClassName={css.active}
            className={css.menuItem}
            isActive={(match, location) =>
              location.pathname.indexOf("/orders") > -1 ||
              location.pathname.indexOf("/editorder") > -1 ||
              location.pathname.indexOf("/addorder") > -1
            }
          >
            <OrdersIcon className={css.icon} />
            {+sidebarType !== 1 ? "Заказы" : ""}
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
                location.pathname.indexOf("/editproduct") > -1 ||
                location.pathname.indexOf("/addproduct") > -1
              )
                return true;
              else return false;
            }}
          >
            <ProductsIcon className={css.icon} />
            {+sidebarType !== 1 ? "Продукты" : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/comments/?page=1"
            activeClassName={css.active}
            className={css.menuItem}
          >
            <CommentsIcon className={css.icon} />
            {+sidebarType !== 1 ? "Комментарии" : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            activeClassName={css.active}
            className={css.menuItem}
          >
            <CatIcon className={css.icon} />
            {+sidebarType !== 1 ? "Категории" : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            activeClassName={css.active}
            className={[css.menuItem, css.users].join(" ")}
          >
            <UsersIcon className={css.icon} />
            {+sidebarType !== 1 ? "Пользователи" : ""}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
