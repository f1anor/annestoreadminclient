import ModalNewCategoryContainer from "Common/ModalNewCategory/ModalNewCategoryContainer";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddProduct from "./AddProduct/AddProduct";
import EditProductContainer from "./EditProduct/EditProductContainer";
import ModalProductsErrorContainer from "./ModalProductsError/ModalProductsErrorContainer";
import ProductsContainer from "./Products/ProductsContainer";

const ProductsContent = ({
  isProductAddingSuccess,
  isProductEditingSuccess,
  productsToOrder,
}) => {
  return (
    <>
      <Switch>
        <Route
          path="/products/addproduct"
          render={() =>
            !isProductAddingSuccess ? (
              <AddProduct />
            ) : (
              <Redirect to="/products" />
            )
          }
        />
        <Route
          path="/products/editproduct/:id"
          render={() =>
            !isProductEditingSuccess ? (
              <EditProductContainer />
            ) : (
              <Redirect to="/products" />
            )
          }
        />
        <Route
          path="/products"
          render={() =>
            !!productsToOrder && productsToOrder.length > 0 ? (
              <Redirect to="/orders/addorder" />
            ) : (
              <ProductsContainer />
            )
          }
        />
      </Switch>
      {/* Модальные окна */}
      <ModalProductsErrorContainer />
      <ModalNewCategoryContainer />
    </>
  );
};
export default ProductsContent;
