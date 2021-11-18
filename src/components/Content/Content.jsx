import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CategoriesContainer from "./Categories/CategoriesContainer";
import CommentsContainer from "./Comments/CommentsContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";
import OrdersContentContainer from "./OrdersContent/OrdersContentContainer";
import ProductsContentContainer from "./ProductsContent/ProductsContentContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = () => {
  return (
    <Switch>
      <Route path="/products" render={() => <ProductsContentContainer />} />
      <Route path="/orders" render={() => <OrdersContentContainer />} />
      <Route path="/comments/:id?" render={() => <CommentsContainer />} />
      <Route path="/categories" render={() => <CategoriesContainer />} />
      <Route path="/dashboard" render={() => <DashboardContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/" render={() => <Redirect to="/dashboard?page=1" />} />
    </Switch>
  );
};

export default Content;
