import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CategoriesContainer from "./Categories/CategoriesContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";
import OrdersContainer from "./Orders/OrdersContainer";
import ProductsContainer from "./Products/ProductsContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = () => {
  return (
    <Switch>
      <Route path="/products" render={() => <ProductsContainer />} />
      <Route path="/categories" render={() => <CategoriesContainer />} />
      <Route path="/dashboard" render={() => <DashboardContainer />} />
      <Route path="/orders" render={() => <OrdersContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/" render={() => <Redirect to="/dashboard" />} />
    </Switch>
  );
};

export default Content;
