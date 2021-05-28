import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AddProductContainer from "./AddProduct/AddProductContainer";
import CategoriesContainer from "./Categories/CategoriesContainer";
import CommentsContainer from "./Comments/CommentsContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";
import EditProductContainer from "./EditProduct/EditProductContainer";
import OrdersContentContainer from "./OrdersContent/OrdersContentContainer";
import ProductsContainer from "./Products/ProductsContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = ({ isProductAddingSuccess, isProductEditingSuccess }) => {
  return (
    <Switch>
      <Route path="/products" render={() => <ProductsContainer />} />
      <Route
        path="/addproduct"
        render={() =>
          !isProductAddingSuccess ? (
            <AddProductContainer />
          ) : (
            <Redirect to="/products/" />
          )
        }
      />
      <Route
        path="/editproduct/:id"
        render={() =>
          !isProductEditingSuccess ? (
            <EditProductContainer />
          ) : (
            <Redirect to="/products/" />
          )
        }
      />
      {/* <Route path="/editorder/:id" render={() => <OrdersContainer />} /> */}
      <Route path="/orders" render={() => <OrdersContentContainer />} />
      <Route path="/comments/:id?" render={() => <CommentsContainer />} />
      <Route path="/categories" render={() => <CategoriesContainer />} />
      <Route path="/dashboard" render={() => <DashboardContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/" render={() => <Redirect to="/dashboard" />} />
    </Switch>
  );
};

export default Content;
