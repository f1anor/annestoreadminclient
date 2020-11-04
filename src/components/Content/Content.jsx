import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesContainer from "./Categories/CategoriesContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";
import OrdersContainer from "./Orders/OrdersContainer";
import ProductsContainer from "./Products/ProductsContainer";

const Content = () => {
  return (
    <Switch>
      <Route path="/products" render={() => <ProductsContainer />} />
      <Route path="/categories" render={() => <CategoriesContainer />} />
      <Route path="/dashboard" render={() => <DashboardContainer />} />
      <Route path="/orders" render={() => <OrdersContainer />} />
    </Switch>
  );
};

export default Content;
