import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Title from "../../../Common/Title/Title";
import AllContainer from "./All/AllContainer";
import EditContainer from "./Edit/EditContainer";
import NewContainer from "./New/NewContainer";
import css from "./Orders.module.css";
import ModalImg from "Common/ModalImg/ModalImg";

const Orders = ({
  isAddedSuccess,
  isEditingSuccess,
  isDisabled,
  isEdit,
  img,
  setImg,
  lastParams,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <Title anim={!!isDisabled}>Заказы</Title>
        <ul className={css.menu}>
          <li>
            <NavLink
              activeClassName={css.active}
              to={`/orders/all?${lastParams ? lastParams : "page=1"}`}
            >
              Все
            </NavLink>
          </li>
          {!!isEdit && (
            <li>
              <NavLink activeClassName={css.active} to="/orders/edit">
                Просмотр
              </NavLink>
            </li>
          )}
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
            !isAddedSuccess ? (
              <NewContainer />
            ) : (
              <Redirect
                to={`/orders/all?${lastParams ? lastParams : "page=1"}`}
              />
            )
          }
        />
        <Route
          path="/orders/edit/:id"
          render={() =>
            !isEditingSuccess ? (
              <EditContainer />
            ) : (
              <Redirect
                to={`/orders/all?${lastParams ? lastParams : "page=1"}`}
              />
            )
          }
        />
        <Route path="/orders/all" render={() => <AllContainer />} />
        <Route
          path="/orders/"
          render={() => <Redirect to="/orders/all?page=1" />}
        />
      </Switch>

      <ModalImg show={!!img} img={img} onHide={() => setImg(null)} />
    </div>
  );
};

export default Orders;
