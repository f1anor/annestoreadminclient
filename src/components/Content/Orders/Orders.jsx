import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Title from "Common/Title/Title";
import Layout from "Common/Layout/Layout";
import TabMenu from "Common/TabMenu/TabMenu";
import css from "./Orders.module.css";
import ListContainer from "./List/ListContainer";
import TitleMainBtn from "Common/TitleMainBtn/TitleMainBtn";
import SearchContainer from "Common/Search/SearchContainer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Orders = ({ isDisabled, isEdit, img, setImg, lastParams }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.titleLine}>
          <Title>Заказы</Title>
          <div className={css.tools}>
            <SearchContainer placeholder="Поиск по заказам..." />
            <TitleMainBtn>
              <Link className={css.addLink} to="/addorder">
                Создать
              </Link>
            </TitleMainBtn>
          </div>
        </div>
        <TabMenu>
          <li>
            <NavLink to="/orders/all">Все</NavLink>
          </li>
          <li>
            <NavLink to="/orders/new">Новые</NavLink>
          </li>
          <li>
            <NavLink to="/orders/process">В обработке</NavLink>
          </li>
          <li>
            <NavLink to="/orders/warning">Проблемные</NavLink>
          </li>
          <li>
            <NavLink to="/orders/success">Ожидают самовывоза</NavLink>
          </li>
          <li>
            <NavLink to="/orders/completed">Завершенные</NavLink>
          </li>
          <li>
            <NavLink to="/orders/deleted">Удаленные</NavLink>
          </li>
        </TabMenu>
      </div>
      <Layout>{/* <ListContainer /> */}</Layout>
    </div>
  );
};

export default Orders;
