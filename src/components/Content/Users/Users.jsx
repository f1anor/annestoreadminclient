import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Title from "../../../Common/Title/Title";
import AdminsContainer from "./Admins/AdminsContainer";
import css from "./Users.module.css";

const Users = ({ isFetching }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <Title anim={!!isFetching}>Пользователи</Title>
        <ul className={css.menu}>
          <li>
            <NavLink activeClassName={css.active} to="/users/clients">
              Клиенты
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={css.active} to="/users/admins?page=1">
              Управление
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/users/admins" render={() => <AdminsContainer />} />
        <Route
          path="/users/"
          render={() => <Redirect to="/users/clients?page=1" />}
        />
      </Switch>
    </div>
  );
};

export default Users;
