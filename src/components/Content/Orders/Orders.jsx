import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Title from "../../../Common/Title/Title";
import AllContainer from "./All/AllContainer";
import NewContainer from "./New/NewContainer";
import css from "./Orders.module.css";

const Orders = ({ isAddedSuccess }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <Title anim="">Заказы</Title>
        <ul className={css.menu}>
          <li>
            <NavLink activeClassName={css.active} to="/orders/all?page=1">
              Все
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={css.active} to="/orders/new">
              Новый
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route
          path="/orders/new"
          render={() =>
            !isAddedSuccess ? <NewContainer /> : <Redirect to="/orders/all" />
          }
        />
        <Route path="/orders/all" render={() => <AllContainer />} />
        <Route
          path="/orders/"
          render={() => <Redirect to="/orders/all?page=1" />}
        />
      </Switch>
    </div>
  );
};

export default Orders;
