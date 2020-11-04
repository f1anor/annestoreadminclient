import React from "react";
import Title from "../../../Common/Title/Title";

import css from "./Products.module.css";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Add from "./Add/Add";
import AllContainer from "./All/AllContainer";
import EditContainer from "./Edit/EditContainer";

const Products = ({
  isEdit,
  isAddingSuccess,
  isProdFetching,
  isCatFetching,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <Title anim={isProdFetching || isCatFetching}>Продукты</Title>
        <ul className={css.menu}>
          <li>
            <NavLink activeClassName={css.active} to="/products/all?page=1">
              Все
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={css.active} to="/products/add">
              Добавить
            </NavLink>
          </li>
          {!!isEdit && (
            <li>
              <NavLink activeClassName={css.active} to="/products/edit">
                Редактировать
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <Switch>
        <Route
          path="/products/add"
          render={() =>
            !isAddingSuccess ? <Add /> : <Redirect to="/products/" />
          }
        />
        <Route
          path="/products/edit/:article"
          render={() => <EditContainer />}
        />
        <Route path="/products/all" render={() => <AllContainer />} />
        <Route
          path="/products/"
          render={() => <Redirect to="/products/all?page=1" />}
        />
      </Switch>
    </div>
  );
};

export default Products;
