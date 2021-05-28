import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import OrdersContainer from "./Orders/OrdersContainer";
import ModalAddNoteContainer from "./ModalAddNote/ModalAddNoteContainer";
import ModalAddProductContainer from "./ModalAddProduct/ModalAddProductContainer";
import AddOrderContainer from "./AddOrder/AddOrderContainer";
import EditOrderContainer from "./EditOrder/EditOrderContainer";
import ModalOrderErrorContainer from "./ModalOrderError/ModalOrderErrorContainer";

const OrdersContent = ({ isOrderAddingSuccess, isOrderEditingSuccess }) => {
  return (
    <>
      <Switch>
        <Route
          path="/orders/addorder/"
          render={() =>
            !isOrderAddingSuccess ? (
              <AddOrderContainer />
            ) : (
              <Redirect to="/orders/all" />
            )
          }
        />
        <Route
          path="/orders/editorder/:id"
          render={() =>
            !isOrderEditingSuccess ? (
              <EditOrderContainer />
            ) : (
              <Redirect to="/orders/all" />
            )
          }
        />
        <Route path="/orders/:type" render={() => <OrdersContainer />} />
      </Switch>
      {/* Модальные окна */}
      <ModalAddProductContainer />
      <ModalAddNoteContainer />
      <ModalOrderErrorContainer />
    </>
  );
};
export default OrdersContent;
