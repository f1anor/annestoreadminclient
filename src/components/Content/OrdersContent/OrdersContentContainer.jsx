import React from "react";
import { useSelector } from "react-redux";
import {
  getIsOrderAddingSuccess,
  getIsOrderEditingSuccess,
} from "selectors/orders-selectors";
import OrdersContent from "./OrdersContent";

const OrdersContentContainer = ({ ...props }) => {
  const isOrderAddingSuccess = useSelector((state) =>
    getIsOrderAddingSuccess(state)
  );

  const isOrderEditingSuccess = useSelector((state) =>
    getIsOrderEditingSuccess(state)
  );

  return (
    <OrdersContent
      isOrderAddingSuccess={isOrderAddingSuccess}
      isOrderEditingSuccess={isOrderEditingSuccess}
    />
  );
};
export default OrdersContentContainer;
